import styled from "styled-components";
import Image from "next/image";
import Info from "../../public/info.svg";
import { useSelector } from "react-redux";
import { getProducts } from "../../store/products";

export const SNavigation = styled.nav`
  max-width: 1280px;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const STitle = styled.div`
  font-size: 14px;
  display: flex;
  align-items: flex-end;
`;

export const SH3 = styled.h3`
  display: block;
  padding-right: 30px;
`;

export const SWarnings = styled.div`
  color: #d1aa41;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    padding-right: 10px;
    display: block;
  }
`;

export const SActions = styled.div`
  display: flex;
`;

export const SInputWrapper = styled.div`
  width: 210px;
  height: 30px;
  padding-right: 30px;
  input {
    width: 100%;
    height: 100%;
    display: block;
    padding: 5px;
    border-color: #cccccc;
  }
`;

export const SButtonWrapper = styled.div`
  height: 30px;
  color: white;
  display: flex;
`;

export const SButtonIcon = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
  color: black;
`;

export const SButton = styled.button`
  background-color: #2b2b2b;
  color: white;
  display: block;
  height: 100%;
  padding: 0 10px;
`;

export const Subheader = () => {
  const products = useSelector(getProducts);
  const errors = products.filter(
    ({ product, errors }: { product: any[]; errors: any[] }) =>
      (errors || []).length > 0
  );
  return (
    <SNavigation>
      <STitle>
        <SH3>PARSER PLAN/CATEGORIES</SH3>{" "}
        {errors.length > 0 && (
          <SWarnings>
            <i>
              <Image src={Info} alt={"info warnings"} />
            </i>
            {errors.length} Problems
          </SWarnings>
        )}
      </STitle>
      <SActions>
        <SInputWrapper>
          <input />
        </SInputWrapper>
        <SButtonWrapper>
          <SButtonIcon>+</SButtonIcon>
          <SButton>ADD NEW</SButton>
        </SButtonWrapper>
      </SActions>
    </SNavigation>
  );
};

export default Subheader;
