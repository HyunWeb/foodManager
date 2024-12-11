import React from "react";
import styled from "styled-components";

interface LogoProps {
  large?: boolean;
}

const Logo = styled.a<LogoProps>`
  font-family: "Recipekorea", sans-serif;
  cursor: pointer;
  display: inline-block;
  font-size: 24px;
  color: #fe8d00;
`;

const MainLogo = styled.h1<LogoProps>`
  font-family: "Recipekorea", sans-serif;
  display: inline-block;
  font-size: 64px;
  color: #fe8d00;
`;

export default function LogoImg({ large }: LogoProps) {
  return <>{large ? <MainLogo>한끼출근</MainLogo> : <Logo>한끼출근</Logo>}</>;
}
