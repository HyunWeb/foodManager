import React from "react";
import styled from "styled-components";
import MyProfile from "../organisms/MyProfile";
import MyLikeTab from "../organisms/MyLikeTab";

const Container = styled.div`
  @media (min-width: 768px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

export default function MyPageTemplate() {
  return (
    <Container>
      <MyProfile />
      <MyLikeTab />
    </Container>
  );
}
