import { Checkbox, Form, Input, Modal } from "antd";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "../button";
import SyncSVG from "../../public/sync.svg";
import PlusSVG from "../../public/plus.svg";
import { UploadFile } from "../upload-file";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";

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
  width: 600px;
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
  margin: 0;
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

const SUploadFile = styled(UploadFile)`
  .ant-upload {
    background-color: white;
    border: 2px dashed #eaeaea;
    width: 48px;
    height: 48px;
    border-radius: 5px;
  }
  .ant-upload.ant-upload-select-picture-card {
    border: none;
  }
`;

const SFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

function ModalFooter() {
  return (
    <SFooterWrapper>
      <SButton
        color="#9B0000"
        text="REMOVE"
        icon={<DeleteOutlined style={{ color: "#9B0000" }} />}
      />
      <SButton
        color="#11571A"
        text="SAVE"
        icon={<UploadOutlined style={{ color: "#11571A" }} />}
      />
    </SFooterWrapper>
  );
}

export type Prop = {
  width: number;
  product: any;
  visible: boolean;
};

export const EditProduct = ({ width, product, visible }: Prop) => {
  return (
    <Modal width={width} visible={visible} footer={<ModalFooter />}>
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
        <SFormSection name="images">
          <SUploadFile
            button={<Image src={PlusSVG} />}
            action=""
            listType="picture-card"
          />
        </SFormSection>
      </SContent>
    </Modal>
  );
};
