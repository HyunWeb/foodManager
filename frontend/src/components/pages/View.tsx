import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NavBar from "../organisms/NavBar";
import { useParams, useSearchParams } from "react-router-dom";
import ViewTemplateRecipe from "../templates/ViewTemplateRecipe";
import ViewTemplatePosting from "../templates/ViewTemplatePosting";
import axios from "axios";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { usePageRender } from "../organisms/PageRenderContext";

interface CommentListProps {
  commentID: number;
  userID: string;
  date: string;
  content: string;
}
const Container = styled.div`
  background-color: #ffffff;
`;

const Loading = styled.div`
  width: 100vw;
  padding: 30px;
  text-align: center;
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
  const route = process.env.REACT_APP_ROUTE;
  const navigate = useNavigate();

  const [starValue, setStarValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [RecipeData, setRecipeData] = useState({
    type: "",
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
  const [isLogin, setIsLogin] = useState(false);

  const { CommentPageRender, setCommentPageRender } = usePageRender();
  useEffect(() => {
    axios({
      method: "GET",
      url: `${route}/user/check`,
      withCredentials: true,
    }).then((res) => {
      setIsLogin(res.data.result);
      console.log(res.data);
    });


    if (type == "posting") {
      axios({
        method: "GET",
        url: `http://localhost:8000/posting/${id}`,
        withCredentials: true,
      }).then((res) => {
        console.log(res.data.posting);
        setPostingData(res.data.posting);
        setCommentList(res.data.comment);
        console.log(PostingData);
        //setLoading(false);
      }).finally(() => {
        console.log(RecipeData);
        setIsLoading(false);
      });

    } else if (type == "defaultRecipe") {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `${route}/api/${id}`,
        withCredentials: true,
      }).then((res) => {
        const { id, title, img, describe, ingredients, steps } = res.data.data;
        setRecipeData({
          type: type,
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
    } else if (type == "recipe") {
      setIsLoading(true);
      axios({
        method: "GET",
        url: `${route}/Recipe//find/${id}`,
        withCredentials: true
      }).then((res) => {
        console.log(res.data);
        const { recipeID, title, describe, img, time, amount, level } = res.data.recipe;
        setRecipeData({
          type: type,
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

  }, [CommentPageRender]);

  if (!isLogin) {
    navigate("/login");
  }

  if (isLoading) {
    return (
          <Container>
            <Loading>Loading...</Loading>
          </Container>
        )
  }

  return (isLogin &&
    <Container>
      <CommentContext.Provider value={{ CommentList, setCommentList }}>
        {type === "recipe" || type === "defaultRecipe" ? (
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
  )
}
