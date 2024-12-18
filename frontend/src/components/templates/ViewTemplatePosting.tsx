import React from "react";
import styled from "styled-components";
import BackButton from "../atoms/BackButton";
import ViewPostingInfo from "../organisms/ViewPostingInfo";
import PostingCommentList from "../organisms/PostingCommentList";

// 포스팅 전체 정보 타입 정의
interface PostingData {
  postingID: number; // 포스팅 ID
  image: string; // 이미지 URL
  title: string; // 제목
  userId: string; // 작성자 ID
  date: string; // 작성일
  feed: string; // 본문 내용
}

interface CommentListProps {
  commentID: number;
  userId: string;
  date: string;
  comment: string;
}
const Container = styled.div`
  background-color: #ededed;
`;
const ButtonStyle = styled(BackButton)`
  background-color: white;
  border-radius: 50%;
  top: 30px;
`;

export default function ViewTemplatePosting({
  PostingData,
  CommentList,
}: {
  PostingData: PostingData;
  CommentList: CommentListProps[];
}) {
  return (
    <Container>
      <ButtonStyle position="absolute" />
      <ViewPostingInfo value={PostingData} />
      <PostingCommentList CommentList={CommentList} />
    </Container>
  );
}
