import React from "react";
import BackButton from "../atoms/BackButton";
import ViewRecipeInfo from "../organisms/ViewRecipeInfo";
import ViewIngredient from "../organisms/ViewIngredient";
import ViewCookingStep from "../organisms/ViewCookingStep";

export default function ViewTemplate() {
  return (
    <div>
      <BackButton position="absolute" />
      <ViewRecipeInfo />
      <ViewIngredient />
      <ViewCookingStep />
    </div>
  );
}
