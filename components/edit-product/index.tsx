import { Modal } from "antd";
import styled from "styled-components";

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

export const EditProduct = ({ product, visible }: any) => {
  return (
    <Modal width={700} visible={visible}>
      <SHeader>
        <SHeaderTitle>
          update {product.title}
          <SHeaderId> | {product.id}</SHeaderId>
        </SHeaderTitle>
        <SScope>
          <div>ozon</div>
          <SScopeStatus>(last sync: 14.05.2019)</SScopeStatus>
        </SScope>
      </SHeader>
    </Modal>
  );
};
