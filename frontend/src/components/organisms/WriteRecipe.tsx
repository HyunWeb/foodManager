import React, { useState } from "react";
import styled from "styled-components";
import FileUploadForm from "../atoms/FileUploadForm";
import ThreeSelectBlockUi from "../molecules/ThreeSelectBlockUI";
import TextareaForm from "../atoms/TextareaForm";
import ButtonAtom from "../atoms/ButtonAtom";
import IngredientsList from "../molecules/IngredientsList";

const Container = styled.div`
  height: 100%;
  overflow: scroll;
`;
const WrapContent = styled.div`
  height: 200%;
`;

export default function WriteRecipe() {
  const [recipeData, setrecipeData] = useState({
    option1: "",
    option2: "",
    option3: "",
  });

  const [RecipeValue, setRecipeValue] = useState("");
  return (
    <Container>
      <WrapContent>
        <FileUploadForm />
        <ThreeSelectBlockUi
          title="레시피 정보"
          placeholder1="조리시간"
          placeholder2="인분 수"
          placeholder3="난이도"
          type="type2"
          values={recipeData}
          setValues={setrecipeData}
        />
        <TextareaForm
          placeholder="레시피에 대한 간단한 설명을 입력해주세요"
          label="요리 설명"
          value={RecipeValue}
          setValue={setRecipeValue}
        />
        <IngredientsList />
        <ButtonAtom text="업로드" buttontype="upload" type="submit" />
      </WrapContent>
    </Container>
  );
}
