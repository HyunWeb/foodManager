import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";
import axios from "axios";
import { ColorSwatch } from "@chakra-ui/react";
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
  const [feeds, setFeeds] = useState<FeedData[]>([]);
  const [Loading, setLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setLoading(true);
    const data = axios({
      method: "GET",
      url: `/posting`,
      withCredentials: true,
    }).then((res) => {
      console.log(res.data.posting);
      setFeeds(res.data.posting);
      console.log(feeds);
    });
    setLoading(false);
  }, []);
  return (
    <Container>
      {Loading ? (
        <p>Loading...</p>
      ) : (
        <FeedList>
          {feeds && feeds.length > 0 ? (
            feeds.map((feed) => (
              <MainCard
                key={feed.postingID}
                postingID={feed.postingID}
                title={feed.title}
                userId={feed.userId}
                img={feed.img}
                type="feed"
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
