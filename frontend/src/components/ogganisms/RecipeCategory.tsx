import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipeImgBox from "../molecules/RecipeImgBox";
import HeadingAtom from "../atoms/HeadingAtom";
interface RecipeProps {
  id: number;
  title: string;
  src?: string;
  alt?: string;
  rating: number;
}
const RecipeList = styled.ul`
  display: flex;
  overflow: scroll;
`;

const RecipeListItem = styled.li`
  margin-right: 10px;
`;

const CategoryIntro = styled.p`
  font-size: 13px;
  color: #a9a9a9;
  margin-bottom: 20px;
`;
export default function RecipeCategory({
  category,
  introduce,
}: {
  category: string;
  introduce?: string;
}) {
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [loading, setLoading] = useState(false);

  //api 요청 부분
  useEffect(() => {
    setLoading(true);
    setRecipes([
      { id: 1, title: "돈까스 덮밥", rating: 4.5 },
      { id: 2, title: "김치 볶음밥", rating: 3 },
      { id: 3, title: "스파게티", rating: 4.8 },
      { id: 4, title: "마라탕", rating: 2.7 },
      { id: 5, title: "계란볶음밥", rating: 4.1 },
      { id: 6, title: "어묵 우동", rating: 3.9 },
    ]);
    setLoading(false);
  }, []);

  return (
    <div>
      <HeadingAtom
        level={3}
        color="#121212"
        marginBottom={introduce ? "0px" : "20px"}
      >
        {category}
      </HeadingAtom>
      {introduce && <CategoryIntro>{introduce}</CategoryIntro>}
      {loading ? (
        <p>Loading</p>
      ) : (
        <RecipeList>
          {recipes.map((recipe) => (
            <RecipeListItem>
              <RecipeImgBox
                key={recipe.id}
                text={recipe.title}
                rating={recipe.rating}
              />
            </RecipeListItem>
          ))}
        </RecipeList>
      )}
    </div>
  );
}
