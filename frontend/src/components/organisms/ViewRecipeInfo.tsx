import React from "react";
import styled from "styled-components";

import ViewImage from "../molecules/ViewImage";
import ViewIconWrap from "../molecules/ViewIconWrap";
import ViewRecipeHead from "../molecules/ViewRecipeHead";
interface RecipeDataProps {
  title: string;
  detail: string;
  time: string;
  mealCount: string;
  level: string;
  image: string;
}

const RecipeInfo = styled.section`
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export default function ViewRecipeInfo({ value }: { value: RecipeDataProps }) {
  console.log(value);
  return (
    <div>
      {/* 최상단 메인 이미지 */}
      <ViewImage value={value.image} />

      <RecipeInfo>
        {/* 시계, 인분, 난이도 아이콘 */}
        <ViewIconWrap
          time={value.time}
          mealCount={value.mealCount}
          level={value.level}
        />
        {/* 제목과 상세정보 부분 */}
        <ViewRecipeHead title={value.title} detail={value.detail} />
      </RecipeInfo>
    </div>
  );
}
