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
      {/* <Notification
        title="테스트"
        message="테스트입니다."
        type="success"
        onConfirm={() => {
          console.log();
        }}
      /> */}
      <NavBar />
    </Container>
  );
}
