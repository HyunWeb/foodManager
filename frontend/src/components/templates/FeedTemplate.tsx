import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";

interface FeedData {
  id: number;
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
    setFeeds([
      { id: 1, title: "요리제목1", detail: "부가설명1", userId: "user1234" },
      { id: 2, title: "요리제목2", detail: "부가설명2", userId: "user5678" },
      { id: 3, title: "요리제목3", detail: "부가설명3", userId: "user9103" },
      { id: 4, title: "요리제목4", detail: "부가설명4", userId: "user1092" },
    ]);
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
              key={feed.id}
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
