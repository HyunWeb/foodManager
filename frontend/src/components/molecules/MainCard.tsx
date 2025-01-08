import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ImageCard from "../atoms/ImageCard";
import RecipeInfo from "./RecipeInfo";
import IconButtonAtom from "../atoms/IconButtonAtom";
import FeedInfo from "./FeedInfo";
import { Link } from "react-router-dom";
import axios from "axios";
import { feedContext } from "../pages/FilterPosts";
import { ColorSwatch } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { setFilterPageRender } from "../../slices/pageRenderSlice";
import { RootState } from "@/store";
interface MainCardProps {
  likeList?: number[];
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
  background-color: white;
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
  likeList,
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
  const dispatch = useDispatch();
  const { FilterPageRender, isLogin } = useSelector(
    (state: RootState) => state.pageRender
  );

  // 렌더링과 좋아요 배열 변경마다 카드의 좋아요 상태를 전환한다.
  useEffect(() => {
    postingID
      ? setLikeState(
          likeList?.includes(postingID ? postingID : Infinity) ?? false
        )
      : setLikeState(
          likeList?.includes(recipeID ? recipeID : Infinity) ?? false
        );
  }, [likeList]);

  const params = recipeID ? "recipe" : "posting";

  const ChangeLikeState = async () => {
    try {
      if (type === "recipe") {
        const res = await axios.post(
          `${process.env.REACT_APP_ROUTE}/Recipe/update/Like`,
          { recipeID },
          { withCredentials: true }
        );
        if (res.data.result === true) {
          setLikeState(!likeState);
          dispatch(setFilterPageRender(!FilterPageRender));
          alert(res.data.Message);
        } else {
          setLikeState(false);
          dispatch(setFilterPageRender(!FilterPageRender));
          alert(res.data.Message);
        }
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_ROUTE}/posting/${postingID}/like`,
          {},
          { withCredentials: true }
        );
        if (res.data.result === true) {
          setLikeState(!likeState);
          dispatch(setFilterPageRender(!FilterPageRender));
          alert(res.data.message);
        } else {
          setLikeState(false);
          dispatch(setFilterPageRender(!FilterPageRender));
          alert(res.data.message);
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      {isLogin && (
        <LikeButton
          label="좋아요 버튼"
          icontype="heart"
          color={likeState ? "red" : "#e0e0e0"}
          BGcolor="transparent"
          variant="ghost"
          onClick={() => ChangeLikeState()}
        />
      )}
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
