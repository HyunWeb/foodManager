import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import { useParams, useNavigate } from "react-router-dom";
import MainCard from "../molecules/MainCard";
import BackButton from "../atoms/BackButton";
import axios from "axios";
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
export default function FilterPosts() {
  const [feeds, setFeeds] = useState<FeedData[]>([]);
  const [cardType, setCardType] = useState<"feed" | "recipe">("feed");
  const { filter } = useParams<{ filter: string }>();

  useEffect(() => {
    // 페이지가 레시피인지 게시물인지 판단해서 데이터 요청
    if (filter?.includes("recipe")) {
      if (filter?.includes("like_recipe")) {
        const data = axios({
          method: "POST",
          url: `/Recipe/finds/Like`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          if (res.data.result == true) {
            for (let i = 0; i < res.data.recipe.length; i++) {
              console.log(res.data.recipe[i]);
              database.push({
                recipeID: res.data.recipe[i].recipeID,
                title: res.data.recipe[i].title,
                userId: res.data.recipe[i].userID,
                img: res.data.recipe[i].img,
              });
            }
            setFeeds(database);
            console.log("dddd", database);
          } else {
            alert(res.data.message);
          }
        });
      } else {
        const data = axios({
          method: "POST",
          url: `/Recipe/find/user`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          console.log(res.data.recipes.length);
          if (res.data.result == true) {
            for (let i = 0; i < res.data.recipes.length; i++) {
              console.log(res.data.recipes[i]);
              database.push({
                recipeID: res.data.recipes[i].recipeID,
                title: res.data.recipes[i].title,
                userId: res.data.recipes[i].userID,
                img: res.data.recipes[i].img,
              });
            }
            setFeeds(database);
            console.log("dddd", database);
          } else {
            alert(res.data.message);
          }
        });
      }

      setCardType("recipe");
    } else if (filter?.includes("posting")) {
      if (filter?.includes("like_posting")) {
        const data = axios({
          method: "POST",
          url: `/Posting/Like`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          if (res.data.result == true) {
            for (let i = 0; i < res.data.posting.length; i++) {
              console.log(res.data.posting[i]);
              database.push({
                postingID: res.data.posting[i].postingID,
                title: res.data.posting[i].title,
                img: res.data.posting[i].img,
                userId: res.data.posting[i].userID,
              });
            }
            setFeeds(database);
            console.log("dddd", database);
            //   if (i == 0) {

            //   } else {

            //   }
            //   console.log(feeds);
            // }
          } else {
            alert(res.data.message);
          }
        });
      } else {
        const data = axios({
          method: "post",
          url: `/posting/userselect`,
          withCredentials: true,
        }).then((res) => {
          let database = [];
          console.log(res.data);
          if (res.data.result == true) {
            for (let i = 0; i < res.data.posting.length; i++) {
              console.log(res.data.posting[i]);
              database.push({
                postingID: res.data.posting[i].postingID,
                title: res.data.posting[i].title,
                img: res.data.posting[i].img,
                userId: res.data.posting[i].userId,
              });
            }
            setFeeds(database);
            console.log("dddd", database);
            //   if (i == 0) {

            //   } else {

            //   }
            //   console.log(feeds);
            // }
          } else {
            alert(res.data.Message);
          }
        });
      }

      setCardType("feed");
    } else {
      console.error("Page Params Error");
    }
  }, [filter]);

  return (
    <Container>
      <Header />
      {feeds.length > 0 ? (
        <FeedList>
          <BackButton />
          {feeds.map((feed) => (
            <MainCard
              img={"../../" + feed.img}
              key={feed.recipeID || feed.postingID}
              postingID={feed.postingID}
              recipeID={feed.recipeID}
              title={feed.title}
              userId={feed.userId}
              type={cardType}
            />
          ))}
        </FeedList>
      ) : (
        <div>아직 작성한 적이 없는 정보입니다.</div>
      )}

      <NavBar />
    </Container>
  );
}
