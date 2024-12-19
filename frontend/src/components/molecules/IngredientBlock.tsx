import React from "react";
import styled from "styled-components";
import IngredientInfo from "./IngredientInfo";
import { IoWarning } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsFillPatchCheckFill } from "react-icons/bs";

interface IngredientData {
  $img: number;
  kindFood: string;
  amountFood: string;
  ExDate: string;
  remainDate: number;
}

const Container = styled.div<{ $img: number }>`
  position: relative;
  width: 350px;
  height: 120px;
  margin-bottom: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ $img }) =>
    `url('${process.env.PUBLIC_URL}/ingredients/${$img}.png')`};
  background-repeat: no-repeat;
  background-size: 70px;
  background-position: 10% center;
`;
const ExBox = styled.div`
  position: absolute;
  right: 30px;

  font-size: 14px;
  color: #bbbbbb;
  font-weight: 600;
  display: grid;
  gap: 5px;
  justify-items: center;
`;
export default function IngredientBlock({
  $img,
  kindFood,
  amountFood,
  ExDate,
  remainDate,
}: IngredientData) {
  const renderingIcon = () => {
    if (remainDate > 7) {
      return <BsFillPatchCheckFill size={35} color="#64A70B" />;
    } else if (remainDate > 3) {
      return <BsFillQuestionCircleFill size={35} color="#FE8D00" />;
    } else {
      return <IoWarning size={35} color="#FF5E57" />;
    }
  };
  return (
    <Container $img={$img}>
      <IngredientInfo
        kindFood={kindFood}
        amountFood={amountFood}
        ExDate={ExDate}
      />
      <ExBox>
        {renderingIcon()}D - {remainDate}
      </ExBox>
    </Container>
  );
}
