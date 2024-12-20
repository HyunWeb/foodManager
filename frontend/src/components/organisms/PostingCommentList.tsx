import React from "react";
import styled from "styled-components";
import CommentBlock from "../molecules/CommentBlock";
import CommentForm from "../molecules/CommentForm";

interface CommentListProps {
  commentID: number;
  userId: string;
  date: string;
  comment: string;
}
const Container = styled.div``;
const List = styled.ul`
  margin-top: 20px;
  margin-bottom: 100px;
  background-color: #ededed;
  box-sizing: border-box;
  padding-bottom: 80px;
`;
const ListItem = styled.li``;
export default function PostingCommentList({
  CommentList,
}: {
  CommentList: CommentListProps[];
}) {
  return (
    <Container>
      <List>
        {CommentList.map((item) => (
          <ListItem key={item.commentID}>
            <CommentBlock
              userId={item.userId}
              date={item.date}
              comment={item.comment}
            />
          </ListItem>
        ))}
      </List>
      <CommentForm />
    </Container>
  );
}
