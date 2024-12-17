import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";

interface FoodInfo {
  kindFood: string;
  foodName: string;
}

const FoodCategory = styled(HeadingAtom)`
  font-size: 16px;
`;
const FoodName = styled(HeadingAtom)`
  font-size: 16px;
`;

export default function FoodInfo({ kindFood, foodName }: FoodInfo) {
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
    </div>
  );
}
