import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";
import axios from "axios";
import { ColorSwatch } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {} from "../../slices/pageRenderSlice";
import { useParams, useSearchParams } from "react-router-dom";

interface FeedData {
  postingID: number;
  title: string;
  userId: string;
  img: string;
}

const FeedList = styled.ul`
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    width: 850px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  margin-bottom: 100px;
`;
export default function FeedTemplate() {
  const [Postings, setPostings] = useState<FeedData[]>([]);
  const [Postings1, setPostings1] = useState<FeedData[]>([]);
  const [likeState, setLikeState] = useState(false);

  const [Loading, setLoading] = useState(false);
  const [likeArr, setLikeArr] = useState<number[]>();
  const { feedPageRender } = useSelector(
    (state: RootState) => state.pageRender
  );
  const PostIDList = new Set();

  const { id } = useParams<{ id: string }>();
  const route = process.env.REACT_APP_ROUTE;
  async function loading() {
    const feedupdate = await axios({
      method: "GET",
      url: `${route}/posting`,
      withCredentials: true,
    });
    setPostings(feedupdate.data.posting);
  }

  useEffect((): any => {
    async function callFunc() {
      try {
        setLoading(true);
        const res1 = await axios.get(`${route}/posting`, {
          withCredentials: true,
        });
        setPostings(res1.data.posting);
        setLoading(false);

        // 좋아요 눌린 페이지만 불러와야한다.
        const res2 = await axios.get(`${route}/posting/like`, {
          withCredentials: true,
        });
        let likeArrs = res2.data.postLikes;
        if (likeArrs != undefined) {
          likeArrs = likeArrs.map((item: any) => item.postingID);
        } else {
          likeArrs = [];
        }
        setLikeArr(likeArrs);
      } catch (err) {
        console.error(err);
      }
    }
    callFunc();
  }, [feedPageRender]);
  return (
    <Container>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FeedList>
          {Postings && Postings.length > 0 ? (
            Postings.map((feed) => (
              <MainCard
                key={feed.postingID}
                postingID={feed.postingID}
                title={feed.title}
                userId={feed.userId}
                img={feed.img}
                type="feed"
                likeList={likeArr}
              />
            ))
          ) : (
            <p>No data available</p>
          )}
        </FeedList>
      )}
    </Container>
  );
}
