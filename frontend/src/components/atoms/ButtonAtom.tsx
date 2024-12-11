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
`;
interface ButtonAtomProps {
  text: string;
  buttontype: string;
}

export default function ButtonAtom({ text, buttontype }: ButtonAtomProps) {
  const renderButton = () => {
    switch (buttontype) {
      case "login":
        return <LoginButton>{text}</LoginButton>;
      default:
        return null;
    }
  };
  return <>{renderButton()}</>;
}
