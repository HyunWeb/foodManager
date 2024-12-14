import React, { useState } from "react";
import styled from "styled-components";

import TextInputForm from "../atoms/TextInputForm";
import PasswordInputForm from "../atoms/PasswordInputForm";
import ThreeSelectBlockUi from "../molecules/ThreeSelectBlockUI";
import SelectBlockUi from "../molecules/SelectBlockUi";
import ButtonAtom from "../atoms/ButtonAtom";
import Header from "../organisms/Header";

const Container = styled.div`
  padding: 20px;
  height: 100vh;
  position: relative;
`;
const InputWrap = styled.form`
  padding-top: 40px;
`;

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState({ year: "", month: "", day: "" });
  const [genderState, setGenderState] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) {
      setInvalid(false);
    } else {
      setInvalid(true);
      return;
    }

    console.log({ name, email, password, birthDate, genderState });
  };

  return (
    <Container>
      {/* 로고 */}
      <Header hide={true} />
      {/* 입력양식 */}
      <InputWrap onSubmit={handleSubmit}>
        {/* 이름 */}
        <TextInputForm
          placeholder="이름 혹은 닉네임을 입력하세요"
          label="이름"
          value={name}
          setValue={setName}
        />
        {/* 이메일 */}
        <TextInputForm
          placeholder="이메일을 입력하세요"
          label="아이디"
          value={email}
          setValue={setEmail}
          invalid={invalid}
        />
        {/* 패스워드 */}
        <PasswordInputForm
          placeholder="패스워드를 입력하세요"
          label="비밀번호"
          value={password}
          setValue={setPassword}
        />
        {/* 생년월일 */}
        <ThreeSelectBlockUi birthDate={birthDate} setBirthDate={setBirthDate} />
        {/* 성별 */}
        <SelectBlockUi
          genderState={genderState}
          setGenderState={setGenderState}
        />
        {/* 회원가입 버튼 */}
        <ButtonAtom text="회원가입" buttontype="signUp" type="submit" />
      </InputWrap>
    </Container>
  );
}
