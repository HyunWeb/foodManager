import React from "react";
import styled from "styled-components";

interface LogoProps {
  large?: boolean;
}

const Logo = styled.a<LogoProps>`
  font-family: "Recipekorea", sans-serif;
  cursor: pointer;
  display: inline-block;
  font-size: ${(props) => (props.large ? "64px" : "24px")};
  color: #fe8d00;
`;

export default function LogoImg({ large }: LogoProps) {
  return <Logo large={large}>한끼출근</Logo>;
}
