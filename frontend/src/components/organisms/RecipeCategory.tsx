import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import RecipeImgBox from "../molecules/RecipeImgBox";
import HeadingAtom from "../atoms/HeadingAtom";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
interface RecipeProps {
  id: number;
  title: string;
  img: string;
  alt?: string;
}

const Container = styled.div`
  margin-bottom: 20px;
`;
const RecipeList = styled.ul`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  gap: 25px;

  @media (min-width: 768px) {
    gap: 40px;
  }
`;

const RecipeListItem = styled.li`
  margin-right: 10px;
`;

const CategoryIntro = styled.p`
  font-size: 13px;
  color: #a9a9a9;
  margin-bottom: 20px;
`;

const LoadingFont = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
export default function RecipeCategory({
  category,
  introduce,
}: {
  category: string;
  introduce?: string;
}) {
  const { recipes, loading } = useSelector(
    (state: RootState) => state.pageRender
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const wrapRef = useRef<HTMLUListElement | null>(null);

  // 마우스 클릭 당시 위치 저장
  const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!wrapRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - wrapRef.current.offsetLeft);
    setScrollLeft(wrapRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
    if (!isDragging || !wrapRef.current) return;
    e.preventDefault();

    // 드래그한 최종 위치 저장
    const x = e.pageX - wrapRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // 최종위치 - 시작위치로 차이 계산(배율조정용 곱하기)
    wrapRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <Container>
      <HeadingAtom
        level={3}
        color="#121212"
        $marginBottom={introduce ? "0px" : "20px"}
      >
        {category}
      </HeadingAtom>
      {introduce && <CategoryIntro>{introduce}</CategoryIntro>}
      {loading ? (
        <RecipeList>
          <LoadingFont>Loading...</LoadingFont>
        </RecipeList>
      ) : (
        <RecipeList
          ref={wrapRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {recipes && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeListItem key={recipe.id}>
                <RecipeImgBox
                  text={recipe.title}
                  recipeID={recipe.id}
                  src={recipe.img}
                />
              </RecipeListItem>
            ))
          ) : (
            <p>No data available</p>
          )}
        </RecipeList>
      )}
    </Container>
  );
}
