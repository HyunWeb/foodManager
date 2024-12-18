import React from "react";
import styled from "styled-components";
import FeedInfo from "./FeedInfo";

interface CommentBlockProps {
  userId: string;
  date: string;
  comment: string;
}
const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
  border-radius: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;
const Comment = styled.p`
  font-size: 13px;
`;

export default function CommentBlock({
  userId,
  date,
  comment,
}: CommentBlockProps) {
  return (
    <Container>
      <FeedInfo title={userId} detail={date} size="md" />
      <Comment>{comment}</Comment>
    </Container>
  );
}
