import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FoodBlock from "../molecules/FoodBlock";
import IngredientBlock from "../molecules/IngredientBlock";
import axios from "axios";

// interface FoodLog {
//   amount: number; // 음식의 수량
//   category: number; // 음식 카테고리 (예: 1 = 특정 카테고리)
//   foodname: string; // 음식 이름
//   kcal: number; // 칼로리
//   logID: number; // 로그 ID
//   mealtype: string; // 식사 타입 (예: "Breakfast", "Lunch", "Dinner" 등)
//   unit: string; // 단위 (예: '마리', '개')
//   userID: string; // 사용자 ID
//   when: string; // 기록 날짜 (예: "2024-12-20")
// }
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
interface IngredientData {
  id: number;
  $img: number;
  kindFood: string;
  amountFood: string;
  ExDate: string;
  remainDate: number;
}

const FoodList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

export default function FoodBlockList({
  type,
  foodLog,
}: {
  type: "ingredient" | "food";
  foodLog?: FoodLog[];
}) {
  // const [foods, setFoods] = useState<FoodLog[]>([]);
  const [ingredient, setIngredient] = useState<IngredientData[]>([]);
  const [Loading, setLoading] = useState(false);

  const kindOfFood = [
    "",
    `치킨`,
    `중식`,
    `일식`,
    `패스트푸드`,
    `찜 & 탕`,
    `고기`,
    `분식`,
    `카페 & 디저트`,
    `한식`,
    `양식`,
    `아시안`,
    `도시락`,
    `샐러드`,
    `과자`,
    `기타`,
  ];

  const NutritionData = [
    // { id: 1, $img: 9, kindFood: "한식", foodName: "김밥", kcal: 200 },
    // { id: 2, $img: 4, kindFood: "패스트푸드", foodName: "햄버거", kcal: 500 },
    // { id: 3, $img: 2, kindFood: "중식", foodName: "짜장면", kcal: 600 },
    // { id: 4, $img: 14, kindFood: "과자", foodName: "스윙칩", kcal: 300 },
    // { id: 5, $img: 1, kindFood: "치킨", foodName: "양념치킨", kcal: 900 },
  ];

  const IngredientData = [
    {
      id: 1,
      $img: 1,
      kindFood: "신선식품",
      amountFood: "1개",
      ExDate: "2025/03/15",
      remainDate: 10,
    },
    {
      id: 2,
      $img: 2,
      kindFood: "곡물 & 견과류",
      amountFood: "1개",
      ExDate: "2025/03/15",
      remainDate: 7,
    },
    {
      id: 3,
      $img: 3,
      kindFood: "가공 & 저장식품",
      amountFood: "1개",
      ExDate: "2025/03/15",
      remainDate: 3,
    },
    {
      id: 4,
      $img: 4,
      kindFood: "유제품",
      amountFood: "1개",
      ExDate: "2025/03/15",
      remainDate: 2,
    },
    {
      id: 5,
      $img: 5,
      kindFood: "음료",
      amountFood: "1개",
      ExDate: "2025/03/15",
      remainDate: 6,
    },
    {
      id: 6,
      $img: 6,
      kindFood: "기타",
      amountFood: "1개",
      ExDate: "2025/03/15",
      remainDate: 6,
    },
  ];

  // useEffect(() => {
  //   setLoading(true);
  //   type === "food" ? setFoods(log) : setIngredient(IngredientData);
  //   setLoading(false);
  // }, []);
  return (
    <div>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FoodList>
          {type === "food"
            ? foodLog &&
              foodLog.map((food) => (
                <FoodBlock
                  key={food.logID}
                  $img={food.category}
                  foodName={food.foodname + " _ " + food.amount + food.unit}
                  kindFood={kindOfFood[food.category]}
                  kcal={food.kcal}
                />
              ))
            : IngredientData.map((Ingredient) => (
                <IngredientBlock
                  key={Ingredient.id}
                  $img={Ingredient.$img}
                  kindFood={Ingredient.kindFood}
                  amountFood={Ingredient.amountFood}
                  ExDate={Ingredient.ExDate}
                  remainDate={Ingredient.remainDate}
                />
              ))}
        </FoodList>
      )}
    </div>
  );
}
