import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainCard from "../molecules/MainCard";

interface FeedData {
  postingID: number;
  title: string;
  userId: string;
  img: string;
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
      {
        postingID: 1,
        title: "요리제목1",
        userId: "user1234",
        img: "https://picsum.photos/400",
      },
      {
        postingID: 2,
        title: "요리제목2",
        userId: "user5678",
        img: "https://picsum.photos/400",
      },
      {
        postingID: 3,
        title: "요리제목3",
        userId: "user9103",
        img: "https://picsum.photos/400",
      },
      {
        postingID: 4,
        title: "요리제목4",
        userId: "user1092",
        img: "https://picsum.photos/400",
      },
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
              key={feed.postingID}
              postingID={feed.postingID}
              title={feed.title}
              userId={feed.userId}
              img={feed.img}
              type="feed"
            />
          ))}
        </FeedList>
      )}
    </Container>
  );
}
