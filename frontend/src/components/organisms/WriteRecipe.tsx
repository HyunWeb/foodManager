import React, { useState } from "react";
import styled from "styled-components";
import FileUploadForm from "../atoms/FileUploadForm";
import ThreeSelectBlockUi from "../molecules/ThreeSelectBlockUI";
import TextareaForm from "../atoms/TextareaForm";
import ButtonAtom from "../atoms/ButtonAtom";
import IngredientsList from "../molecules/IngredientsList";
import CookingSteps from "../molecules/CookingSteps";

const Container = styled.form`
  height: 100%;
  overflow: scroll;
`;
const WrapContent = styled.div``;

export default function WriteRecipe() {
  const [recipeData, setrecipeData] = useState({
    option1: "",
    option2: "",
    option3: "",
  });
  const [RecipeValue, setRecipeValue] = useState("");
  const [inputSets, setInputSets] = useState([{ ingreName: "", amount: "" }]);
  const [CookingStep, setCookingStep] = useState([
    { stepNo: "1", content: "" },
  ]);
  const [fileName, setFileName] = React.useState<string | null>(null);
  console.log(recipeData, fileName, RecipeValue, inputSets, CookingStep);
  return (
    <Container>
      <WrapContent>
        <FileUploadForm value={fileName} setValue={setFileName} />
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
        <IngredientsList
          placeholder1="재료 이름"
          placeholder2="개수/용량"
          value={inputSets}
          setValue={setInputSets}
        />
        <CookingSteps
          placeholder="조리 방법을 입력하세요"
          value={CookingStep}
          setValue={setCookingStep}
        />
        <ButtonAtom text="업로드" buttontype="upload" type="submit" />
      </WrapContent>
    </Container>
  );
}
