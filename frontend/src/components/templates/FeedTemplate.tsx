import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";
import axios from "axios";
import { ColorSwatch } from "@chakra-ui/react";

interface FeedData {
  postingID: number;
  title: string;
  detail: string;
  userId: string;
}

const FeedList = styled.ul``;

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
  useEffect(() => {
    setLoading(true);
    const data = axios({
      method: "GET",
      url: "/posting",
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
          {feeds.map((feed) => (
            <MainCard
              key={feed.postingID}
              postingID={feed.postingID}
              title={feed.title}
              detail={feed.detail}
              userId={feed.userId}
              type="feed"
            />
          ))}
        </FeedList>
      )}
    </Container>
  );
}
