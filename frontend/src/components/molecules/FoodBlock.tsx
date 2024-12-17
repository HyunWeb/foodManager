import React from "react";
import styled from "styled-components";
import FoodInfo from "./FoodInfo";

interface FoodBlockProps {
  $img: number;
  kindFood: string;
  foodName: string;
  kcal: number;
}

const Container = styled.div<{ $img: number }>`
  width: 350px;
  height: 120px;
  padding-left: 30px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-image: ${({ $img }) => `url('./menu/${$img}.png')`};
  background-repeat: no-repeat;
  background-size: 70px;
  background-position: 90% center;
`;

export default function FoodBlock({
  $img,
  kindFood,
  foodName,
  kcal,
}: FoodBlockProps) {
  return (
    <Container $img={$img}>
      <FoodInfo kindFood={kindFood} foodName={foodName} kcal={kcal} />
    </Container>
  );
}
