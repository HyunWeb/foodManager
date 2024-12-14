import React from "react";
import styled from "styled-components";
import RatingBox from "../molecules/RatingBox";
import HeadingAtom from "../atoms/HeadingAtom";
import Paragraph from "../atoms/Paragraph";

interface RecipeInfoProps {
  title: string;
  detail: string;
  rating: number;
}

const Container = styled.div`
  height: 50%;
  padding: 10px;
`;

const StyleParagraph = styled(Paragraph)`
  font-size: 14px;
  color: #a1a1a1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function RecipeInfo({ title, detail, rating }: RecipeInfoProps) {
  return (
    <Container>
      <HeadingAtom level={4}>{title}</HeadingAtom>
      <StyleParagraph>{detail}</StyleParagraph>
      <RatingBox rating={rating} />
    </Container>
  );
}
