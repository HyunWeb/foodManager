import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FoodBlock from "../molecules/FoodBlock";

interface FoodData {
  id: number;
  $img: number;
  kindFood: string;
  foodName: string;
  kcal: number;
}

const FoodList = styled.ul``;

export default function FoodBlockList() {
  const [foods, setFoods] = useState<FoodData[]>([]);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setFoods([
      { id: 1, $img: 9, kindFood: "한식", foodName: "김밥", kcal: 200 },
      { id: 2, $img: 4, kindFood: "패스트푸드", foodName: "햄버거", kcal: 500 },
      { id: 3, $img: 2, kindFood: "중식", foodName: "짜장면", kcal: 600 },
      { id: 4, $img: 14, kindFood: "과자", foodName: "스윙칩", kcal: 300 },
      { id: 5, $img: 1, kindFood: "치킨", foodName: "양념치킨", kcal: 900 },
    ]);
    setLoading(false);
  }, []);
  return (
    <div>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FoodList>
          {foods.map((food) => (
            <FoodBlock
              key={food.id}
              $img={food.$img}
              kindFood={food.kindFood}
              foodName={food.foodName}
              kcal={food.kcal}
            />
          ))}
        </FoodList>
      )}
    </div>
  );
}
