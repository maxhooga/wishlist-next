import { Header } from "../../../components/header";
import Subheader from "../../../components/subheader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  getPage,
  getPerPage,
  getProducts,
  getTotal,
} from "../../../store/products";
import WarningIcon from "../../../public/warning-icon.svg";
import Checked from "../../../public/checked.svg";
import Unchecked from "../../../public/unchecked.svg";
import React from "react";
import Image from "next/image";
import {
  Image as AntdImage,
  PaginationProps,
  Space,
  Table,
  Anchor,
} from "antd";
import styled from "styled-components";
import { EditOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";
import { EditProduct } from "../../../components/edit-product";

const processImages = (images?: string[]) => {
  if (images) {
    return images.map((img: string) => img.split(" ")[0]);
  }
  return [];
};

const CutText = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 40px;
  white-space: nowrap;
`;

const InStockCell = ({ inStock }: { inStock: boolean }) => (
  <Image src={inStock ? Checked : Unchecked} />
);

const getEditProductLink = (id: string) => {
  return `/admin/products/${id}`;
};

const Cell = ({
  value,
  name,
  original,
  index,
}: {
  value: any;
  name: string;
  original: any;
  index: number;
}) => {
  const hasIssue = (original.issues || []).find(
    ({ path, message }: { path: string; message: string }) => path === name
  );

  return (
    <Space title={original[name]}>
      {value}
      {hasIssue && <Image title={hasIssue.message} src={WarningIcon} />}
    </Space>
  );
};

const columns = (openForm: (id: string) => void) => [
  {
    title: "ID",
    key: "id",
    dataIndex: "id",
    render: (id: string, original: any, index: number) => {
      return (
        <Cell
          value={<CutText>{id}</CutText>}
          name="id"
          original={original}
          index={index}
        />
      );
    },
  },
  {
    title: "PRIMARY IMAGE",
    key: "primaryImages",
    dataIndex: "images",
    render: (images: string[], original: any, index: number) => {
      return (
        <Cell
          value={
            (
              <AntdImage
                width={80}
                key={`${processImages(images)[0]}-${index}`}
                src={processImages(images)[0]}
                preview={false}
              />
            ) || null
          }
          name="images"
          original={original}
          index={index}
        />
      );
    },
  },
  {
    title: "TITLE",
    key: "title",
    dataIndex: "title",
    render: (title: string, original: any, index: number) => {
      return (
        <Cell value={title} name="title" original={original} index={index} />
      );
    },
  },
  {
    title: "CATEGORY",
    key: "category",
    dataIndex: "category",
    render: (category: string, original: any, index: number) => {
      return (
        <Cell
          value={category}
          name="category"
          original={original}
          index={index}
        />
      );
    },
  },
  {
    title: "SLUG",
    key: "slug",
    dataIndex: "slug",
    render: (slug: string, original: any, index: number) => {
      return (
        <Cell value={slug} name="slug" original={original} index={index} />
      );
    },
  },
  {
    title: "IMAGES",
    key: "images",
    dataIndex: "images",
    render: (images: string[], original: any, index: number) => {
      return (
        <Cell
          value={processImages(images).map((image: string, index: number) =>
            index < 5 ? (
              <AntdImage
                width={40}
                key={`${image}-${index}`}
                src={image}
                preview={false}
              />
            ) : null
          )}
          name="images"
          original={original}
          index={index}
        />
      );
    },
  },
  {
    title: "IN STOCK",
    key: "inStock",
    dataIndex: "inStock",
    render: (inStock: boolean, original: any, index: number) => {
      return (
        <Cell
          value={() => <InStockCell inStock={!!inStock} />}
          name="inStock"
          original={original}
          index={index}
        />
      );
    },
  },
  {
    key: "actions",
    render: (original: any) => {
      return (
        <Space>
          <Anchor affix={false} onClick={() => openForm(original.id)}>
            <Anchor.Link
              title={<EditOutlined />}
              // href={getEditProductLink(original.id)}
            />
          </Anchor>
          <Anchor affix={false}>
            <Anchor.Link title={<DeleteOutlined />} href="" />
          </Anchor>
          <Anchor affix={false}>
            <Anchor.Link title={<FormOutlined />} href="" />
          </Anchor>
        </Space>
      );
    },
  },
];

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const page = useSelector(getPage);
  const perPage = useSelector(getPerPage);
  const total = useSelector(getTotal);

  const [activeProductId, setActiveProductId] = React.useState(
    null as null | string
  );

  const product = products.find(
    ({ product: { id } }: { product: { id: string } }) => id === activeProductId
  );

  React.useEffect(() => {
    dispatch(fetchProducts({ page, perPage }));
  }, [page, perPage, dispatch]);

  const onPageChange = (page: number, perPageOpt?: number) => {
    dispatch(fetchProducts({ page, perPage: perPageOpt || perPage }));
  };

  const pagination: PaginationProps = {
    current: page,
    pageSize: perPage,
    total: total * perPage,
    onChange: onPageChange,
  };

  console.log(product, activeProductId, products);

  return (
    <>
      <Header />
      <Subheader />
      <Table
        rowKey={"id"}
        dataSource={products.map(
          ({ product, errors }: { product: any[]; errors: any[] }) => ({
            ...product,
            issues: errors,
          })
        )}
        pagination={pagination}
        columns={columns(setActiveProductId)}
      />
      {product && <EditProduct product={product.product} visible={!!product} />}
    </>
  );
};

export default Products;
