import styled from "styled-components";
import React from "react";

const SButtonWrapper = styled.div`
  height: 30px;
  color: white;
  display: flex;
`;

const SButtonIcon = styled.div<{ color?: string }>`
  width: 30px;
  height: 30px;
  max-width: 30px;
  max-height: 30px;
  min-width: 30px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e8e8;
  color: black;
  i {
    color: ${({ color }) => (color ? color : "#2b2b2b")};
  }
`;

const SButton = styled.button<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "#2b2b2b"};
  color: white;
  display: block;
  height: 100%;
  width: 100%;
  padding: 0 10px;
`;

export type Props = {
  icon: string | React.ReactNode;
  text: string;
  color?: string;
};

export function Button({ icon, text, color, ...rest }: Props) {
  return (
    <SButtonWrapper {...rest}>
      <SButtonIcon color={color}>{icon}</SButtonIcon>
      <SButton backgroundColor={color}>{text}</SButton>
    </SButtonWrapper>
  );
}
