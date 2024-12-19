import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FoodBlock from "../molecules/FoodBlock";
import IngredientBlock from "../molecules/IngredientBlock";

interface FoodData {
  id: number;
  $img: number;
  kindFood: string;
  foodName: string;
  kcal: number;
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
`;

export default function FoodBlockList({
  type,
}: {
  type: "ingredient" | "food";
}) {
  const [foods, setFoods] = useState<FoodData[]>([]);
  const [ingredient, setIngredient] = useState<IngredientData[]>([]);
  const [Loading, setLoading] = useState(false);

  const NutritionData = [
    { id: 1, $img: 9, kindFood: "한식", foodName: "김밥", kcal: 200 },
    { id: 2, $img: 4, kindFood: "패스트푸드", foodName: "햄버거", kcal: 500 },
    { id: 3, $img: 2, kindFood: "중식", foodName: "짜장면", kcal: 600 },
    { id: 4, $img: 14, kindFood: "과자", foodName: "스윙칩", kcal: 300 },
    { id: 5, $img: 1, kindFood: "치킨", foodName: "양념치킨", kcal: 900 },
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

  useEffect(() => {
    setLoading(true);
    type === "food" ? setFoods(NutritionData) : setIngredient(IngredientData);
    setLoading(false);
  }, [type]);
  return (
    <div>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FoodList>
          {type === "food"
            ? foods.map((food) => (
                <FoodBlock
                  key={food.id}
                  $img={food.$img}
                  kindFood={food.kindFood}
                  foodName={food.foodName}
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
