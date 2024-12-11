import React from "react";
import styled from "styled-components";
import ButtonAtom from "../atoms/ButtonAtom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ALink = styled.a`
  margin-top: 10px;
  text-decoration: underline;
  color: #121212;
`;

export default function SigninUpBlock() {
  return (
    <Container>
      <ButtonAtom text="로그인" buttontype="login" />
      <ALink>회원가입</ALink>
    </Container>
  );
}
