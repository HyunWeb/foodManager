import React from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";
import { FaUserGroup } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { PiArrowFatLineUpFill } from "react-icons/pi";
import HeadingAtom from "../atoms/HeadingAtom";
import Paragraph from "../atoms/Paragraph";
const ImageWrap = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  position: relative;
  border-radius: 20px 20px 0px 0px;
`;
const ImageStyle = styled(ImageCard)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition-duration: 200ms;
  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const RecipeInfo = styled.section`
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;
const IconWrap = styled.div`
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #d6d6d6;
  box-sizing: border-box;
  padding: 10px;
`;
const Icon = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 17px;
  flex-basis: 1;
`;
const ParaGraph = styled.p`
  font-size: 16px;
  color: #a1a1a1;
`;
const RecipeName = styled.div`
  padding: 10px 20px;
`;
export default function ViewRecipeInfo() {
  return (
    <div>
      <ImageWrap>
        <ImageStyle src="https://picsum.photos/400" alt="피드 이미지" />
      </ImageWrap>
      <RecipeInfo>
        <IconWrap>
          <Icon>
            <FaClock size={30} color={"#121212"} />
            15분
          </Icon>
          <Icon>
            <FaUserGroup size={30} color={"#121212"} />
            2인분
          </Icon>
          <Icon>
            <PiArrowFatLineUpFill size={30} color={"#121212"} />하
          </Icon>
        </IconWrap>
        <RecipeName>
          <HeadingAtom level={2}>음식 이름</HeadingAtom>
          <ParaGraph>부가 설명</ParaGraph>
        </RecipeName>
      </RecipeInfo>
    </div>
  );
}
