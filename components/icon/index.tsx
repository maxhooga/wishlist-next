import styled from "styled-components"
import Image from "next/image"

type Props = {
    icon: StaticImageData
}
const Sdiv = styled.div`
    width: 20px;
    height: 20px;
`;

export default function Icon(props: Props) {
    
    console.log(props, props.icon);
    return (
        <Sdiv>
            <Image src={props.icon} {...props}/>
        </Sdiv>
    );
}