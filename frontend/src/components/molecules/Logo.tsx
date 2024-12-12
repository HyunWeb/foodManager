import React from "react";
import styled from "styled-components";
import LogoImg from "../atoms/LogoImg";
import ImageCard from "../atoms/ImageCard";

const Container = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
`;

export default function Logo() {
  return (
    <Container>
      <ImageCard src="/LogoImg.png" alt="로고 이미지" />
      <LogoImg large={true} />
    </Container>
  );
}
