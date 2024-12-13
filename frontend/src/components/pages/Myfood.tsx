import React from "react";
import styled from "styled-components";
import Header from "../ogganisms/Header";
import NavBar from "../ogganisms/NavBar";
import RecipeCategory from "../ogganisms/RecipeCategory";

const Container = styled.div`
  padding: 20px;
`;

export default function Myfood() {
  return (
    <div>
      <Header />
      <Container>
        <RecipeCategory
          category="오늘 뭐먹지?"
          introduce="냉장고 속의 재료들로 만들수 있어요!"
        />
      </Container>
      <NavBar />
    </div>
  );
}
