import React from "react";
import styled from "styled-components";
import { Button } from "@chakra-ui/react";

const LoginButton = styled(Button)`
  background-color: #fe8d00;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border-radius: 10px;
  font-size: 24px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const LongButton = styled(Button)`
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

const UploadButton = styled(LongButton)`
  position: fixed;
`;
interface ButtonAtomProps {
  text: string;
  buttontype: string;
  type: "button" | "reset" | "submit" | undefined;
  label?: string;
  onClick?: () => void;
}

export default function ButtonAtom({
  text,
  buttontype,
  type = "button",
}: ButtonAtomProps) {
  const renderButton = () => {
    switch (buttontype) {
      case "login":
        return <LoginButton type={type}>{text}</LoginButton>;
      case "signUp":
        return <LongButton type={type}>{text}</LongButton>;
      case "upload":
        return <UploadButton type={type}>{text}</UploadButton>;
      default:
        return null;
    }
  };
  return <>{renderButton()}</>;
}
