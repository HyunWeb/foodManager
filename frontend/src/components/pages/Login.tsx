import React, { useState } from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";

import TextInputForm from "../atoms/TextInputForm";
import SigninUpBlock from "../molecules/SigninUpBlock";
import PasswordInputForm from "../atoms/PasswordInputForm";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  height: 100vh;
`;

const StyleImage = styled(ImageCard)`
  margin-bottom: 30px;
  transform: translateX(-20%);
  align-self: center;
`;
const InputWrap = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 320px;
  margin-bottom: 30px;
`;
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };
  return (
    <Container>
      <StyleImage src="/LogoImg.png" alt="로고 이미지" />
      <InputWrap onSubmit={handleSubmit}>
        <TextInputForm
          placeholder="아이디를 입력하세요"
          label="아이디"
          value={email}
          setValue={setEmail}
        />
        <PasswordInputForm
          placeholder="패스워드를 입력하세요"
          label="비밀번호"
          value={password}
          setValue={setPassword}
        />
        <SigninUpBlock />
      </InputWrap>
    </Container>
  );
}
