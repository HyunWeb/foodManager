import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import Paragraph from "../atoms/Paragraph";
import Profileimg from "../atoms/Profileimg";

interface RecipeInfoProps {
  userId: string;
  title: string;
  detail: string;
}

const Container = styled.div`
  height: 40%;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
`;
const ContentWrap = styled.div`
  width: 100%;
`;

const StyleParagraph = styled(Paragraph)`
  font-size: 14px;
  color: #a1a1a1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 50px);
`;
const IdHeading = styled(HeadingAtom)`
  font-weight: 500;
  font-size: 15px;
`;

const TitleHeading = styled(HeadingAtom)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: calc(100% - 50px);
`;

export default function FeedInfo({ userId, title, detail }: RecipeInfoProps) {
  return (
    <Container>
      <Profileimg size="xl" />
      <ContentWrap>
        <IdHeading level={3}>{userId}</IdHeading>
        <TitleHeading level={4}>{title}</TitleHeading>
        <StyleParagraph>{detail}</StyleParagraph>
      </ContentWrap>
    </Container>
  );
}
