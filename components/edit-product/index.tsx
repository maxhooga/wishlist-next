import { Checkbox, Form, Input, Modal } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../button";
import SyncSVG from "../../public/sync.svg";

const SHeader = styled.header`
  padding: 30px 20px 10px 20px;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
  display: flex;
  border-bottom: 1px solid #707070;
  justify-content: space-between;
`;

const SHeaderTitle = styled.div`
  width: 300px;
`;

const SHeaderId = styled.div``;

const SScope = styled.div`
  font-weight: 200;
  font-size: 32px;
  display: flex;
  align-items: flex-end;
`;

const SScopeStatus = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
  padding-left: 5px;
`;

const SFormSection = styled(Form.Item)`
  padding: 10px 0;
  font-size: 14px;
  label {
    width: 110px;
    font-family: "Roboto", sans-serif;
  }
`;

const SContent = styled(Form)`
  padding: 10px 20px;
`;

const SButton = styled(Button)`
  width: 130px;
  font-size: 14px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export type Prop = {
  width: number;
  product: any;
  visible: boolean;
};

export const EditProduct = ({ width, product, visible }: Prop) => {
  console.log(product);
  return (
    <Modal width={width} visible={visible}>
      <SHeader>
        <SHeaderTitle>
          UPDATE {product.title}
          <SHeaderId>{product.id}</SHeaderId>
        </SHeaderTitle>
        <SScope>
          <div>ozon</div>
          <SScopeStatus>(last sync: {product.lastSync})</SScopeStatus>
          <SButton text={"SYNC"} icon={<Image src={SyncSVG} />} />
        </SScope>
      </SHeader>
      <SContent>
        <SFormSection name="title" label="TITLE" rules={[{ required: true }]}>
          <Input value={product.title} />
        </SFormSection>
        <SFormSection
          name="subheader"
          label="SUBHEADER"
          rules={[{ required: true }]}
        >
          <Input value={product.subheader} />
        </SFormSection>
        <SFormSection
          name="description"
          label="DESCRIPTION"
          rules={[{ required: true }]}
        >
          <Input.TextArea value={product.description} />
        </SFormSection>
        <SFormSection name="slug" label="SLUG" rules={[{ required: true }]}>
          <Input value={product.slug} />
        </SFormSection>
        <SFormSection
          name="inStock"
          label="IN STOCK?"
          rules={[{ required: true }]}
        >
          <Checkbox checked={product.inStock} />
        </SFormSection>
        <SFormSection
          name="category"
          label="CATEGORY"
          rules={[{ required: true }]}
        >
          <Input value={product.category} />
        </SFormSection>
      </SContent>
    </Modal>
  );
};
