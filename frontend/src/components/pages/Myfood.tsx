import React from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import RecipeCategory from "../organisms/RecipeCategory";
import NavBar from "../organisms/NavBar";
import FoodHistory from "../organisms/FoodHistory";

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
        <FoodHistory category="냉장고 속 재료" type="ingredient" />
      </Container>
      <NavBar />
    </div>
  );
}
