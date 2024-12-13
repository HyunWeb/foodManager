import React from "react";
import styled from "styled-components";
import RecipeCategory from "../ogganisms/RecipeCategory";
import FeedCategory from "../ogganisms/FeedCategory";

const Container = styled.div`
  padding: 20px;
`;

export default function RecipeTemplate() {
  return (
    <Container>
      <RecipeCategory category="오늘의 추천" />
      <FeedCategory />
    </Container>
  );
}
