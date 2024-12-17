import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";

interface FoodInfo {
  kindFood: string;
  foodName: string;
  kcal: number;
}

const FoodCategory = styled(HeadingAtom)`
  font-size: 20px;
  color: #fe8d00;
  font-weight: 700;
`;
const FoodName = styled(HeadingAtom)`
  font-size: 15px;
  font-weight: 500;
`;
const KcalStyled = styled.p`
  color: #9c9c9c;
  font-size: 15px;
  font-weight: 500;
`;
const KcalImpact = styled.strong`
  font-size: 20px;
  color: #121212;
  font-weight: 700;
`;

export default function FoodInfo({ kindFood, foodName, kcal }: FoodInfo) {
  return (
    <div>
      <FoodCategory
        level={3}
        color="#121212"
        // $marginBottom={introduce ? "0px" : "20px"}
      >
        {kindFood}
      </FoodCategory>
      <FoodName
        level={3}
        color="#121212"
        // $marginBottom={introduce ? "0px" : "20px"}
      >
        {foodName}
      </FoodName>
      <KcalStyled>
        <KcalImpact>{kcal}</KcalImpact> / Kcal
      </KcalStyled>
    </div>
  );
}
