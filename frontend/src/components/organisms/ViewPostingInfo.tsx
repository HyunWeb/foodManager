import React from "react";
import styled from "styled-components";
import ViewImage from "../molecules/ViewImage";
import HeadingAtom from "../atoms/HeadingAtom";
import FeedInfo from "../molecules/FeedInfo";

interface PostingDataProps {
  image: string;
  title: string;
  userId: string;
  date: string;
  feed: string;
}
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 1.5;
`;

const PostingInfo = styled.section`
  padding: 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  background-color: #ffffff;
`;

export default function ViewPostingInfo({
  value,
}: {
  value: PostingDataProps;
}) {
  return (
    <Container>
      <ViewImage value={value.image} />

      <PostingInfo>
        <HeadingAtom level={2} $marginBottom="10px">
          {value.title}
        </HeadingAtom>
        <FeedInfo title={value.userId} detail={value.date} />
        <Paragraph>{value.feed}</Paragraph>
      </PostingInfo>
    </Container>
  );
}
