import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import MainCard from "../molecules/MainCard";
import BackButton from "../atoms/BackButton";
import axios from "axios";
import { createContext } from "vm";
import { string } from "prop-types";
import { setCommentPageRender } from "../../slices/pageRenderSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
interface FeedData {
  recipeID?: number;
  postingID?: number;
  title: string;
  userId?: string;
  rating?: number;
  img: string;
}

const Container = styled.div``;
const FeedList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type feedContextType = {
  userfeeds: FeedData[];
  setuserFeeds: React.Dispatch<React.SetStateAction<FeedData[]>>;
};

export const feedContext = React.createContext<feedContextType | undefined>(
  undefined
);

export default function FilterPosts() {
  const [userfeeds, setuserFeeds] = useState<FeedData[]>([]);
  const [cardType, setCardType] = useState<"feed" | "recipe">("feed");
  const [likeArr, setLikeArr] = useState<number[]>();
  const { filter } = useParams<{ filter: string }>();
  const dispatch = useDispatch();
  const { FilterPageRender } = useSelector(
    (state: RootState) => state.pageRender
  );
  const changefeed = () => {
    // 페이지가 레시피인지 게시물인지 판단해서 데이터 요청
    if (filter?.includes("recipe")) {
      if (filter?.includes("like_recipe")) {
        const data = axios({
          method: "POST",
          url: `${process.env.REACT_APP_ROUTE}/Recipe/finds/Like`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          if (res.data.result == true) {
            for (let i = 0; i < res.data.recipe.length; i++) {
              database.push({
                recipeID: res.data.recipe[i].recipeID,
                title: res.data.recipe[i].title,
                userId: res.data.recipe[i].userID,
                img: res.data.recipe[i].img,
              });
            }
            setuserFeeds(database);
          } else {
            alert(res.data.message);
          }
        });

        // 좋아요 눌린 페이지만 불러와야한다.
        const res2 = axios({
          method: "GET",
          url: `${process.env.REACT_APP_ROUTE}/Recipe/finds/LikeList`,
          withCredentials: true,
        }).then((res2) => {
          let likeArrs = res2.data.RecipeLike;
          likeArrs = likeArrs.map((item: any) => item.recipeID);
          setLikeArr(likeArrs);
        });
      } else if (filter?.includes("my_recipe")) {
        const data = axios({
          method: "POST",
          url: `${process.env.REACT_APP_ROUTE}/Recipe/find/user`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          if (res.data.result == true) {
            for (let i = 0; i < res.data.recipes.length; i++) {
              database.push({
                recipeID: res.data.recipes[i].recipeID,
                title: res.data.recipes[i].title,
                userId: res.data.recipes[i].userID,
                img: res.data.recipes[i].img,
              });
            }
            setuserFeeds(database);
          } else {
            alert(res.data.message);
          }
        });

        // 좋아요 눌린 페이지만 불러와야한다.
        const res2 = axios({
          method: "GET",
          url: `${process.env.REACT_APP_ROUTE}/Recipe/finds/LikeList`,
          withCredentials: true,
        }).then((res2) => {
          let likeArrs = res2.data.RecipeLike;
          likeArrs = likeArrs.map((item: any) => item.recipeID);
          setLikeArr(likeArrs);
        });
      }

      setCardType("recipe");
    } else if (filter?.includes("posting")) {
      if (filter?.includes("like_posting")) {
        const data = axios({
          method: "GET",
          url: `${process.env.REACT_APP_ROUTE}/Posting/likeList`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          if (res.data.result == true) {
            for (let i = 0; i < res.data.posting.length; i++) {
              database.push({
                postingID: res.data.posting[i].postingID,
                title: res.data.posting[i].title,
                img: res.data.posting[i].img,
                userId: res.data.posting[i].userID,
              });
            }
            setuserFeeds(database);
          } else {
            alert(res.data.message);
          }
        });

        // 좋아요 눌린 페이지만 불러와야한다.
        const res2 = axios({
          method: "GET",
          url: `${process.env.REACT_APP_ROUTE}/posting/like`,
          withCredentials: true,
        }).then((res2) => {
          let likeArrs = res2.data.postLikes;
          likeArrs = likeArrs.map((item: any) => item.postingID);
          setLikeArr(likeArrs);
        });
      } else {
        const data = axios({
          method: "post",
          url: `${process.env.REACT_APP_ROUTE}/posting/userselect`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          if (res.data.result == true) {
            for (let i = 0; i < res.data.posting.length; i++) {
              database.push({
                postingID: res.data.posting[i].postingID,
                title: res.data.posting[i].title,
                img: res.data.posting[i].img,
                userId: res.data.posting[i].userId,
              });
            }
            setuserFeeds(database);
          } else {
            alert(res.data.Message);
          }
        });

        // 좋아요 눌린 페이지만 불러와야한다.
        const res2 = axios({
          method: "GET",
          url: `${process.env.REACT_APP_ROUTE}/posting/like`,
          withCredentials: true,
        }).then((res2) => {
          let likeArrs = res2.data.postLikes;
          likeArrs = likeArrs.map((item: any) => item.postingID);
          setLikeArr(likeArrs);
        });
      }
      setCardType("feed");
    } else {
      console.error("Page Params Error");
    }
  };

  useEffect(() => {
    changefeed();
  }, [filter, FilterPageRender]);

  return (
    <feedContext.Provider value={{ userfeeds, setuserFeeds }}>
      <Container>
        <Header />
        <BackButton />
        {userfeeds ? (
          userfeeds.length > 0 ? (
            <FeedList>
              {userfeeds.map((feed) => (
                <MainCard
                  img={"../../" + feed.img}
                  key={feed.recipeID || feed.postingID}
                  postingID={feed.postingID}
                  recipeID={feed.recipeID}
                  title={feed.title}
                  userId={feed.userId}
                  type={cardType}
                  likeList={likeArr}
                />
              ))}
            </FeedList>
          ) : (
            <div>찜한 목록이 없습니다.</div>
          )
        ) : (
          <div>Loading</div>
        )}
        <NavBar />
      </Container>
    </feedContext.Provider>
  );
}
