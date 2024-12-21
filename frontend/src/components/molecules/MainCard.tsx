import React, { useState } from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";
import RecipeInfo from "./RecipeInfo";
import IconButtonAtom from "../atoms/IconButtonAtom";
import FeedInfo from "./FeedInfo";
import { Link } from "react-router-dom";
import axios from "axios";

interface MainCardProps {
  postingID?: number;
  recipeID?: number;
  img: string;
  alt?: string;
  title: string;
  rating?: number;
  describe?: string;
  type?: "recipe" | "feed";
  userId?: string;
}

const Container = styled.li`
  position: relative;
  width: 350px;
  height: 240px;
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 400px;
    height: 350px;
  }
`;
const ImageWrap = styled.div`
  height: 70%;
  overflow: hidden;
  position: relative;
  @media (min-width: 768px) {
    height: 70%;
  }
`;
const StyledImageCard = styled(ImageCard)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const LikeButton = styled(IconButtonAtom)`
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 1;
`;

export default function MainCard({
  postingID,
  recipeID,
  img = "https://picsum.photos/400",
  alt = img,
  title,
  rating = 2.5,
  type = "recipe",
  userId = "user1234",
}: MainCardProps) {
  const [likeState, setLikeState] = useState(false);
  const ChangeLikeState = () => {
    setLikeState(!likeState);
  };
  const params = recipeID ? "recipe" : "posting";

  return (
    <Container>
      <LikeButton
        label="좋아요 버튼"
        icontype="heart"
        color={likeState ? "red" : "white"}
        BGcolor="transparent"
        variant="ghost"
        onClick={() => ChangeLikeState()}
      />
      <Link to={"/main/view/" + (recipeID || postingID) + "?type=" + params}>
        <ImageWrap>
          <StyledImageCard src={img} alt={alt} />
        </ImageWrap>
        {type === "recipe" ? (
          <RecipeInfo title={title} rating={rating} />
        ) : (
          <FeedInfo title={title} userId={userId} />
        )}
      </Link>
    </Container>
  );
}
