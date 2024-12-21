import React, { useEffect } from "react";
import styled from "styled-components";
import BackButton from "../atoms/BackButton";
import ViewRecipeInfo from "../organisms/ViewRecipeInfo";
import ViewIngredient from "../organisms/ViewIngredient";
import ViewCookingStep from "../organisms/ViewCookingStep";
import { Rating } from "../ui/rating";
import { useState } from "react";
import axios from "axios";

interface Ingredient {
  ingredientID: number; // 해당 레시피 ID (참조)
  ingreName: string; // 재료 이름
  amount: string; // 재료 양
}

// 하나의 조리 단계 타입 정의
interface CookingStep {
  stepNo: string; // 단계 번호
  content: string; // 단계 설명
}

// 레시피 전체 정보 타입 정의
interface RecipeData {
  recipeID: number; // 레시피 ID
  title: string; // 레시피 이름
  describe: string; // 상세 설명
  img: string; // 이미지 URL
  time: string; // 조리 시간
  amount: string; // 몇 인분인지
  level: string; // 난이도
  ingredient: Ingredient[]; // 재료 리스트
  steps: CookingStep[]; // 조리 단계 리스트
}

interface RecipeType {
  recipeID: string;
  type: string;
}

// interface DefaultData {
//   recipeSEQ: number;
//     title: string;
//     img: string;
//     describe: string;
//     category: string;
//     ingredients: Ingredient[];
//     steps: CookingStep[];
// }

const Container = styled.div`
  margin-bottom: 200px;
  position: relative;
  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 50vw;
    margin: 0 auto;
    margin-bottom: 200px;
  }
`;

const ButtonStyle = styled(BackButton)`
  background-color: white;
  border-radius: 50%;
  top: 30px;
  @media (min-width: 768px) {
    left: 10px;
  }
`;
const StarStyle = styled(Rating)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70px;
`;

export default function ViewTemplateRecipe({
  RecipeType,
  starValue,
  setStarValue,
}: {
  RecipeType: RecipeType;
  starValue: number;
  setStarValue: (e: number) => void;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const route = process.env.REACT_APP_ROUTE;
  const [RecipeData, setRecipeData] = useState({
    recipeID: 0,
    title: "",
    describe: "",
    img: "",
    time: "",
    amount: "", //몇인분인지
    level: "",
    ingredients: [
      {
        ingredientID: 0,
        ingreName: "",
        amount: "",
      },
    ],
    steps: [
      {
        stepNo: "",
        content: "",
      },
    ],
  });

  useEffect(() => {
    if (RecipeType.type == "defaultRecipe") {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `${route}/api/${RecipeType.recipeID}`,
        withCredentials: true,
      })
        .then((res) => {
          const { id, title, img, describe, ingredients, steps } =
            res.data.data;
          console.log(id, title, img, describe, ingredients, steps);
          console.log(res.data);
          setRecipeData({
            recipeID: id,
            title: title,
            img: img,
            time: "",
            amount: "",
            level: "",
            describe: describe,
            ingredients: ingredients,
            steps: steps,
          });
        })
        .catch((error) => console.error("Error fetching data:", error))
        .finally(() => {
          console.log(RecipeData);
          setIsLoading(false);
        });
    }

    // 레시피 데이터 업데이트
    if (RecipeType.type == "recipe") {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `${route}/Recipe//find/${RecipeType.recipeID}`,
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          const { recipeID, title, describe, img, time, amount, level } =
            res.data.recipe;
          setRecipeData({
            recipeID: recipeID,
            title: title,
            describe: describe,
            img: img,
            time: time,
            amount: amount,
            level: level,
            ingredients: res.data.ingredient,
            steps: res.data.steps,
          });
        })
        .catch((error) => console.error("Error fetching data:", error))
        .finally(() => setIsLoading(false));
    }
  }, [RecipeType]);

  if (isLoading) {
    return <div>Loading...</div>; // 또는 스켈레톤 UI를 표시
  }

  return (
    <Container>
      <ButtonStyle position="absolute" />
      <ViewRecipeInfo value={RecipeData} />
      <ViewIngredient value={RecipeData.ingredients} />
      <ViewCookingStep value={RecipeData.steps} />
      <StarStyle
        size="lg"
        value={starValue}
        onValueChange={(e) => setStarValue(e.value)}
        allowHalf
        colorPalette="orange"
      />
    </Container>
  );
}
