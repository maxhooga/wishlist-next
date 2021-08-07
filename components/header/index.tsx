import Logo from "../../public/logo.svg"
import Cart from "../../public/cart.svg"
import Profile from "../../public/profile.svg"
import Like from "../../public/like.svg"
import Image from "next/image"
import Styles from "../../styles/header.module.css"
import styled from "styled-components"
import Icon from "../icon"


const Sheader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    min-height: 35px;
    width: 100%;
`;
const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
    a{
        margin-left: 20px;
    }
`;
const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;
export default function Header(){
    return(
        <Sheader>
            <LeftSide>
                <a href="#">
                    <Image src={Logo}/>
                </a>
            </LeftSide>
            <RightSide>
                <input type="search"/>
                <a><Icon icon={Profile}/></a>
                <a><Icon icon={Cart}/></a>
                <a><Icon icon={Like}/></a>
            </RightSide>
        </Sheader>
    )
}