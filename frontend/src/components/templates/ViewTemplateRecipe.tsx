import React from "react";
import styled from "styled-components";
import BackButton from "../atoms/BackButton";
import ViewRecipeInfo from "../organisms/ViewRecipeInfo";
import ViewIngredient from "../organisms/ViewIngredient";
import ViewCookingStep from "../organisms/ViewCookingStep";
import { Rating } from "../ui/rating";
interface Ingredient {
  recipeID: number; // 해당 레시피 ID (참조)
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
  image: string; // 이미지 URL
  time: string; // 조리 시간
  mealCount: string; // 몇 인분인지
  level: string; // 난이도
  ingred: Ingredient[]; // 재료 리스트
  step: CookingStep[]; // 조리 단계 리스트
}

const Container = styled.div`
  margin-bottom: 200px;
  position: relative;
  background-color: #ffffff;
`;

const ButtonStyle = styled(BackButton)`
  background-color: white;
  border-radius: 50%;
  top: 30px;
`;
const StarStyle = styled(Rating)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -70px;
`;

export default function ViewTemplateRecipe({
  RecipeData,
  starValue,
  setStarValue,
}: {
  RecipeData: RecipeData;
  starValue: number;
  setStarValue: (e: number) => void;
}) {
  return (
    <Container>
      <ButtonStyle position="absolute" />
      <ViewRecipeInfo value={RecipeData} />
      <ViewIngredient value={RecipeData.ingred} />
      <ViewCookingStep value={RecipeData.step} />
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
