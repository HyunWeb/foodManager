import React, { useState } from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";
import RecipeInfo from "./RecipeInfo";
import IconButtonAtom from "../atoms/IconButtonAtom";
import FeedInfo from "./FeedInfo";
import { Link } from "react-router-dom";

interface MainCardProps {
  postingID?: number;
  recipeID?: number;
  src?: string;
  alt?: string;
  title: string;
  detail: string;
  rating?: number;
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
`;
const ImageWrap = styled.div`
  height: 60%;
  overflow: hidden;
  position: relative;
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
  src = "https://picsum.photos/400",
  alt = "피드 이미지",
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
      <Link to={"/main/view/" + (recipeID || postingID) + "?type=" + params}>
        <LikeButton
          label="좋아요 버튼"
          icontype="heart"
          color={likeState ? "red" : "white"}
          BGcolor="transparent"
          variant="ghost"
          onClick={() => ChangeLikeState()}
        />
        <ImageWrap>
          <StyledImageCard src={src} alt={alt} />
        </ImageWrap>
        {type === "recipe" ? (
          <RecipeInfo title={title} detail={detail} rating={rating} />
        ) : (
          <FeedInfo title={title} detail={detail} userId={userId} />
        )}
      </Link>
    </Container>
  );
}
