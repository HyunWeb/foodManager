import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import Wrapgraph from "../molecules/Wrapgraph";
import FoodHistory from "../organisms/FoodHistory";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setIsLogin } from "../../slices/pageRenderSlice";
import { useNavigate } from "react-router-dom";

interface FoodLog {
  amount: number;
  category: number;
  foodname: string;
  kcal: number;
  logID: number;
  mealtype: string;
  unit: string;
  userID: string;
  when: string;
}

const Loading = styled.div`
  width: 100vw;
  padding: 30px;
  text-align: center;
`;

export default function Nutrition() {
  const [foodLog, setFoodLog] = useState<FoodLog[]>([]);
  const [NeedKcal, setNeedKcal] = useState(0);
  const [Totalkcal, setTotalkcal] = useState(0);
  const dispatch = useDispatch();
  const { pageRender, startDate, isLogin } = useSelector(
    (state: RootState) => state.pageRender
  );
  const [isLoading, setIsLoading] = useState(true);

  const route = process.env.REACT_APP_ROUTE;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
    // 로그인여부 확인
    axios({
      method: "GET",
      url: `${route}/user/check`,
      withCredentials: true,
    }).then((res) => {
      dispatch(setIsLogin(res.data.result));
    });

    // foodlog 불러오기
    axios({
      method: "GET",
      url: `${route}/foodlog`,
      params: { startDate },
      withCredentials: true,
    })
      .then((res) => {
        const { log, kcalPerDay } = res.data;
        setFoodLog(log);
        setNeedKcal(kcalPerDay);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pageRender, startDate]);

  useEffect(() => {
    setTotalkcal(0);
    foodLog &&
      foodLog.forEach((item) => setTotalkcal((prev) => prev + item.kcal));
  }, [foodLog]);

  if (isLoading) {
    return (
      <div>
        <Header />
        <Loading>Loading...</Loading>
        <NavBar />
      </div>
    );
  }

  // if (!isLogin) {
  //   navigate("/login");
  // }

  return (
    isLogin && (
      <div>
        <Header />
        <Wrapgraph NeedKcal={NeedKcal} Totalkcal={Totalkcal} />
        <FoodHistory category="먹은 음식" type="food" foodLog={foodLog} />
        <NavBar />
      </div>
    )
  );
}
