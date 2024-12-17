import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import FoodBlock from "../molecules/FoodBlock";
interface FoodHistoryProps {
  category: string;
}

const HeadingName = styled(HeadingAtom)`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default function FoodHistory({ category }: FoodHistoryProps) {
  return (
    <div>
      <HeadingName
        level={2}
        color="#121212"
        // $marginBottom={introduce ? "0px" : "20px"}
      >
        {category}
      </HeadingName>

      <FoodBlock />
    </div>
  );
}
