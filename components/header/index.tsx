import Logo from "../../public/logo.svg"
import Image from "next/image"
import Styles from "../../styles/header.module.css"

export default function Header(){
    return(
        <header>
            <div className={Styles.leftSide}>
                <a href="#">
                    <Image src={Logo}/>
                </a>
            </div>
            <div className="rightside">
                <input type="search"/>
            </div>
        </header>
    )
}