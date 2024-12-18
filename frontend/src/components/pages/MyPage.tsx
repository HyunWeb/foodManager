import React from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import MyPageTemplate from "../templates/MyPageTemplate";
import Notification from "../organisms/Notification";

const Container = styled.div`
  height: 100vh;
`;

export default function MyPage() {
  return (
    <Container>
      <Header />
      <MyPageTemplate />
      <Notification title="테스트 타이틀" message="메시지입니다." type="info" />
      <NavBar />
    </Container>
  );
}
