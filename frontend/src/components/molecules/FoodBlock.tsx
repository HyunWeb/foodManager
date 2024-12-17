import React from "react";
import styled from "styled-components";
import FoodInfo from "./FoodInfo";

const Container = styled.div`
  width: 350px;
  height: 120px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export default function FoodBlock() {
  return (
    <Container>
      <FoodInfo kindFood="한식" foodName="김밥" />
    </Container>
  );
}
