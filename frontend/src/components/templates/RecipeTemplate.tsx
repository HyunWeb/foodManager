import React from "react";
import styled from "styled-components";
import RecipeCategory from "../ogganisms/RecipeCategory";

const Container = styled.div`
  padding: 20px;
`;

export default function RecipeTemplate() {
  return (
    <Container>
      <RecipeCategory />
    </Container>
  );
}
