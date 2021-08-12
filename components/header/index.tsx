import styled from "styled-components";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Cart from "../../public/cart.svg";
import Star from "../../public/star.svg";
import Profile from "../../public/profile.svg";

const SHeader = styled.header`
  max-width: 1280px;
  height: 31px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SLogo = styled.div`
  height: 100%;
  display: flex;
  line-height: 31px;
  img {
    height: 100%;
  }
`;

const SActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SAction = styled.div`
  padding: 1px;
  width: 19px;
  height: 19px;
  padding: 0 7.5px;
`;

const SIcon = styled.i`
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Header = ({}) => {
  return (
    <SHeader>
      <SLogo>
        <Image src={Logo} alt="general logo" />
        &nbsp;|&nbsp;admin
      </SLogo>
      <SActionsWrapper>
        <SAction>
          <a href={"#"}>
            <SIcon>
              <Image src={Profile} alt="profile icon" />
            </SIcon>
          </a>
        </SAction>
        <SAction>
          <a href={"#"}>
            <SIcon>
              <Image src={Star} alt="wishlist icon" />
            </SIcon>
          </a>
        </SAction>
        <SAction>
          <a href={"#"}>
            <SIcon>
              <Image src={Cart} alt="cart icon" />
            </SIcon>
          </a>
        </SAction>
      </SActionsWrapper>
    </SHeader>
  );
};
