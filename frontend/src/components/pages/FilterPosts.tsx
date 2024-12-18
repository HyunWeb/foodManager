import React, { useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import IconButtonAtom from "../atoms/IconButtonAtom";
import { useNavigate, useParams } from "react-router-dom";
import MainCard from "../molecules/MainCard";

interface FeedData {
  id: number;
  title: string;
  detail: string;
  userId: string;
}

const Container = styled.div`
  padding: 20px;
`;
const FeedList = styled.ul`
  margin-top: 20px;
`;
export default function FilterPosts() {
  const [feeds, setFeeds] = useState<FeedData[]>([]);

  const navigate = useNavigate();
  const { filter } = useParams<{ filter: string }>();

  console.log();

  const goBack = () => {
    navigate(-1); // 브라우저 히스토리에서 뒤로가기
  };

  const data = {
    like_recipe: [
      { id: 1, title: "요리제목1", detail: "부가설명1", userId: "user1234" },
      { id: 2, title: "요리제목2", detail: "부가설명2", userId: "user5678" },
      { id: 3, title: "요리제목3", detail: "부가설명3", userId: "user9103" },
      { id: 4, title: "요리제목4", detail: "부가설명4", userId: "user1092" },
    ],
    like_feed: ["게시물 4", "게시물 5"],
    my_recipe: ["게시물 6"],
    my_feed: ["게시물 7", "게시물 8", "게시물 9"],
  };

  const content = data[filter as keyof typeof data] || ["데이터 없음"];
  return (
    <Container>
      <Header />
      <IconButtonAtom
        label="뒤로 가기 버튼"
        onClick={goBack}
        icontype="leftArrow"
        BGcolor="transparent"
        variant="ghost"
        color="#484848"
        size="25px"
      />
      <FeedList>
        {/* {content.map((feed) => (
          <MainCard
            key={feed.id}
            title={feed.title}
            detail={feed.detail}
            userId={feed.userId}
            type="feed"
          />
        ))} */}
      </FeedList>
      <NavBar />
    </Container>
  );
}
