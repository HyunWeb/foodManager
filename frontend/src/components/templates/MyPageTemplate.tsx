import React, { useEffect } from "react";
import styled from "styled-components";
import MyProfile from "../organisms/MyProfile";
import MyLikeTab from "../organisms/MyLikeTab";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setIsLogin } from "../../slices/pageRenderSlice";

const Container = styled.div`
  @media (min-width: 768px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

export default function MyPageTemplate() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state: RootState) => state.pageRender);

  const route = process.env.REACT_APP_ROUTE;

  useEffect(() => {
    axios({
      method: "GET",
      url: `${route}/user/check`,
      withCredentials: true,
    }).then((res) => {
      dispatch(setIsLogin(res.data.result));
    });
  });

  return (
    <Container>
      <MyProfile />
      {isLogin && <MyLikeTab />}
    </Container>
  );
}
