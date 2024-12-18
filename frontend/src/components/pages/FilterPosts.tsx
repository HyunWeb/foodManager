import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import { useParams } from "react-router-dom";
import MainCard from "../molecules/MainCard";
import BackButton from "../atoms/BackButton";

interface FeedData {
  id: number;
  title: string;
  detail: string;
  userId?: string;
  rating?: number;
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
      setFeeds([
        // 모의 데이터
        { id: 1, title: "요리제목1", detail: "부가설명1", rating: 3.5 },
        { id: 2, title: "요리제목2", detail: "부가설명2", rating: 4 },
        { id: 3, title: "요리제목3", detail: "부가설명3", rating: 5 },
        { id: 4, title: "요리제목4", detail: "부가설명4", rating: 1 },
      ]);
      setCardType("recipe");
    } else if (filter?.includes("posting")) {
      setFeeds([
        // 모의 데이터
        { id: 1, title: "요리제목1", detail: "부가설명1", userId: "user1234" },
        { id: 2, title: "요리제목2", detail: "부가설명2", userId: "user5678" },
        { id: 3, title: "요리제목3", detail: "부가설명3", userId: "user9103" },
        { id: 4, title: "요리제목4", detail: "부가설명4", userId: "user1092" },
      ]);
      setCardType("feed");
    } else {
      console.error("Page Params Error");
    }
  }, [filter]);

  return (
    <Container>
      <Header />
      <BackButton />
      <FeedList>
        {feeds.map((feed) => (
          <MainCard
            key={feed.id}
            title={feed.title}
            detail={feed.detail}
            userId={feed.userId}
            type={cardType}
          />
        ))}
      </FeedList>
      <NavBar />
    </Container>
  );
}
