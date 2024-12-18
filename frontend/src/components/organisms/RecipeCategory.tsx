import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipeImgBox from "../molecules/RecipeImgBox";
import HeadingAtom from "../atoms/HeadingAtom";
import axios from "axios";
interface RecipeProps {
  recipeSEQ: number;
  title: string;
  src?: string;
  alt?: string;
}

const Container = styled.div`
  margin-bottom: 20px;
`;
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
  const api = process.env.REACT_APP_ROUTE;
  const [recipes, setRecipes] = useState<RecipeProps[]>([]);
  const [loading, setLoading] = useState(false);

  //api 요청 부분
  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${api}/api/items`);
        // console.log(res);
        setRecipes(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };

    fetchItems();
  }, []);

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
        <p>Loading</p>
      ) : (
        <RecipeList>
          {recipes.map((recipe) => (
            <RecipeListItem key={recipe.recipeSEQ}>
              <RecipeImgBox text={recipe.title} recipeID={recipe.recipeSEQ} />
            </RecipeListItem>
          ))}
        </RecipeList>
      )}
    </Container>
  );
}
