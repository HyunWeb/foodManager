import React, { useState } from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";
import RecipeInfo from "./RecipeInfo";
import IconButtonAtom from "../atoms/IconButtonAtom";

interface MainCardProps {
  src?: string;
  alt?: string;
  title: string;
  detail: string;
  rating: number;
}

const Container = styled.div`
  position: relative;
  width: 350px;
  height: 175px;
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const ImageWrap = styled.div`
  height: 50%;
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
  src = "https://picsum.photos/400",
  alt = "피드 이미지",
  title,
  detail,
  rating,
}: MainCardProps) {
  const [likeState, setLikeState] = useState(false);
  const ChangeLikeState = () => {
    setLikeState(!likeState);
  };
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
      <ImageWrap>
        <StyledImageCard src={src} alt={alt} />
      </ImageWrap>
      <RecipeInfo title={title} detail={detail} rating={rating} />
    </Container>
  );
}
