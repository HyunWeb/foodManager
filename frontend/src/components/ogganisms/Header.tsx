import React from "react";
import styled from "styled-components";
import LogoImg from "../atoms/LogoImg";
import { CiLogin } from "react-icons/ci";
import IconButtonAtom from "../atoms/IconButtonAtom";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  position: relative;
  height: 55px;
`;

const LoginButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  svg {
    font-size: 24px;
  }
  &:hover {
    background-color: #e0e0e0; /* Hover 효과 */
  }
`;

export default function Header() {
  return (
    <Container>
      <LogoImg large={false} />
      <IconButtonAtom
        label="알림버튼"
        BGcolor="transparent"
        variant="ghost"
        icontype="bell"
      />
      <LoginButton to="/login">
        <CiLogin />
      </LoginButton>
    </Container>
  );
}
