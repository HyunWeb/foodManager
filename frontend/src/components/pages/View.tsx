import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../organisms/NavBar";
import { useParams, useSearchParams } from "react-router-dom";
import ViewTemplateRecipe from "../templates/ViewTemplateRecipe";
import ViewTemplatePosting from "../templates/ViewTemplatePosting";
import axios from "axios";
import { createContext } from "react";
interface CommentListProps {
  commentID: number;
  userID: string;
  date: string;
  content: string;
}
const Container = styled.div`
  background-color: #ffffff;
`;
// Create the context with a default value
export const CommentContext = React.createContext<
  CommentContextType | undefined
>(undefined);

type CommentContextType = {
  CommentList: {
    commentID: number;
    userID: string;
    date: string;
    content: string;
  }[];

  setCommentList: React.Dispatch<
    React.SetStateAction<
      { commentID: number; userID: string; date: string; content: string }[]
    >
  >;
};
export default function View() {
  const { id } = useParams<{ id: string }>();
  const [params] = useSearchParams();
  const type = params.get("type");
  console.log(type);
  const route = process.env.REACT_APP_ROUTE;

  const [starValue, setStarValue] = useState(0);
  const [RecipeData, setRecipeData] = useState({
    recipeID: 0,
    title: "",
    describe: "",
    img: "",
    time: "",
    amount: "", //몇인분인지
    level: "",
    ingredient: [
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
  const [CommentList, setCommentList] = useState([
    {
      commentID: 0,
      userID: "",
      date: "",
      content: "",
    },
  ]);

  const [PostingData, setPostingData] = useState({
    postingID: 0,
    img: "",
    title: "",
    userID: "",
    date: "",
    content: "",
  });

  useEffect(() => {
    // 레시피 데이터 업데이트
    if (type == "recipe") {
      const data = axios({
        method: "GET",
        url: `${route}/Recipe//find/${id}`,
        withCredentials: true,
      }).then((res) => {
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
          ingredient: res.data.ingredient,
          steps: res.data.steps,
        });
      });
    } else if (type == "posting") {
      const data = axios({
        method: "GET",
        url: `/posting/${id}`,
        withCredentials: true,
      }).then((res) => {
        console.log(res.data.posting);
        setPostingData(res.data.posting);
        setCommentList(res.data.comment);
      });
    }
  }, []);

  return (
    <Container>
      <CommentContext.Provider value={{ CommentList, setCommentList }}>
        {type === "recipe" ? (
          <ViewTemplateRecipe
            starValue={starValue}
            setStarValue={setStarValue}
            RecipeData={RecipeData}
          />
        ) : type === "defaultRecipe" ? (
          <ViewTemplateRecipe
            starValue={starValue}
            setStarValue={setStarValue}
            RecipeData={RecipeData}
          />
        ) : (
          <ViewTemplatePosting PostingData={PostingData} />
        )}
        <NavBar />
      </CommentContext.Provider>
    </Container>
  );
}
