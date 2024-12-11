import React from "react";
import styled from "styled-components";

const Img = styled.img`
  margin: 0 auto;
  margin-bottom: 30px;
  transform: translateX(-23%);
`;
interface ImageCardProps {
  src: string;
  alt: string;
}

export default function ImageCard({ src, alt }: ImageCardProps) {
  return <Img src={src} alt={alt} />;
}
