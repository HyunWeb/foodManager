import React from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";
import HeadingAtom from "../atoms/HeadingAtom";
import { Link } from "react-router-dom";

interface RecipeImgBoxProps {
  recipeID: number;
  text?: string;
  src?: string;
  alt?: string;
}

const Container = styled.div`
  display: inline-block;
`;

const StyledImageCard = styled(ImageCard)`
  width: 100px;
  height: 100px;
  border-radius: 15px;
  margin: 0;
  transform: none;
`;
const ImgWrap = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledHeading = styled(HeadingAtom)`
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100px;
`;
export default function RecipeImgBox({
  text = "요리제목",
  src = "https://picsum.photos/100",
  alt = "레시피 이미지",
  recipeID,
}: RecipeImgBoxProps) {
  return (
    <Link to={"/main/view/" + recipeID}>
      <Container>
        <ImgWrap>
          <StyledImageCard src={src} alt={alt} />
        </ImgWrap>
        <StyledHeading level={4} color="#121212" $marginBottom="">
          {text}
        </StyledHeading>
      </Container>
    </Link>
  );
}
