import React from "react";
import styled from "styled-components";
import CommentBlock from "../molecules/CommentBlock";
import CommentForm from "../molecules/CommentForm";
import { useContext } from "react";
import { CommentContext } from "../pages/View";
type CommentContextType = {
  CommentList: {
    commentID: number;
    userID: string;
    date: string;
    content: string;
  }[];
  setCommentList: React.Dispatch<
    React.SetStateAction<
      { commentID: number; userID: string; date: string; content: string }[]
    >
  >;
};
interface CommentListProps {
  commentID: number;
  userID: string;
  date: string;
  content: string;
}

interface postingIDProps {
  postingID: number;
}
const Container = styled.div``;
const List = styled.ul`
  margin-top: 20px;
  margin-bottom: 100px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding-bottom: 80px;

  @media (min-width: 768px) {
    width: 50vw;
    margin: 0 auto;
  }
`;
const ListItem = styled.li``;
export default function PostingCommentList() {
  const data = useContext(CommentContext);
  return (
    <Container>
      <List>
        {data?.CommentList.map((item: CommentListProps) => (
          <ListItem key={item.commentID}>
            <CommentBlock
              userId={item.userID}
              date={item.date}
              content={item.content}
            />
          </ListItem>
        ))}
      </List>
      <CommentForm />
    </Container>
  );
}
