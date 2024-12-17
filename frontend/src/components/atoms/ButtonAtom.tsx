import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";

// 스타일링된 로그인 버튼
const LoginButton = styled(Button)`
  background-color: #fe8d00;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

// 스타일링된 회원가입 버튼
const SignUpButton = styled(Button)`
  background-color: #fe8d00;
  font-weight: bold;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

interface ButtonAtomProps {
  text: string;
  label?: string;
  buttontype: "login" | "signUp";
  type: "button" | "reset" | "submit" | undefined;
}

export default function ButtonAtom({
  text,
  label,
  buttontype,
  type = "button",
}: ButtonAtomProps) {
  const renderButton = () => {
    switch (buttontype) {
      case "login":
        return (
          <LoginButton type={type} aria-label={label || text}>
            {text}
          </LoginButton>
        );
      case "signUp":
        return (
          <SignUpButton type={type} aria-label={label || text}>
            {text}
          </SignUpButton>
        );
      default:
        return null;
    }
  };

  return <>{renderButton()}</>;
}
