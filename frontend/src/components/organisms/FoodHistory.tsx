import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import FoodBlockList from "./FoodBlockList";
interface FoodLog {
  amount: number;
  category: number;
  foodname: string;
  kcal: number;
  logID: number;
  mealtype: string;
  unit: string;
  userID: string;
  when: string;
}
interface FoodHistoryProps {
  category: string;
  type: "ingredient" | "food";
  foodLog?: FoodLog[];
}

const Container = styled.div`
  padding: 20px;
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

const HeadingName = styled(HeadingAtom)`
  font-size: 20px;
  margin-bottom: 20px;
`;

export default function FoodHistory({
  category,
  type,
  foodLog,
}: FoodHistoryProps) {
  return (
    <Container>
      <HeadingName
        level={2}
        color="#121212"
        // $marginBottom={introduce ? "0px" : "20px"}
      >
        {category}
      </HeadingName>

      <FoodBlockList type={type} foodLog={foodLog} />
    </Container>
  );
}
