import React, { createContext, useContext, useEffect, useState } from "react";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import Wrapgraph from "../molecules/Wrapgraph";
import FoodHistory from "../organisms/FoodHistory";
import axios from "axios";
import { usePageRender } from "../organisms/PageRenderContext";

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

export default function Nutrition() {
  // const initialState = {
  //   amount: 0, // 음식의 수량
  //   category: 0, // 음식 카테고리 (예: 1 = 특정 카테고리)
  //   foodname: "", // 음식 이름
  //   kcal: 0, // 칼로리
  //   logID: 1, // 로그 ID
  //   mealtype: "Breakfast", // 식사 타입 (아침, 점심 등)
  //   unit: "마리", // 단위 (예: '마리', '개')
  //   userID: "@@@", // 사용자 ID
  //   when: "2024-12-20", // 기록 날짜
  // };
  const [foodLog, setFoodLog] = useState<FoodLog[]>([]);
  const [NeedKcal, setNeedKcal] = useState(0);
  const [Totalkcal, setTotalkcal] = useState(0);
  const { pageRender, setPageRender, startDate, setStartDate } =
    usePageRender();

  const route = process.env.REACT_APP_ROUTE;
  useEffect(() => {
    const data = axios({
      method: "GET",
      url: `${route}/foodlog`,
      params: { startDate },
      withCredentials: true,
    }).then((res) => {
      const { log, kcalPerDay } = res.data;
      setFoodLog(log);
      setNeedKcal(kcalPerDay);
    });
  }, [pageRender, startDate]);

  useEffect(() => {
    setTotalkcal(0);
    foodLog &&
      foodLog.forEach((item) => setTotalkcal((prev) => prev + item.kcal));
  }, [foodLog]);
  return (
    <div>
      <Header />
      <Wrapgraph NeedKcal={NeedKcal} Totalkcal={Totalkcal} />
      <FoodHistory category="먹은 음식" type="food" foodLog={foodLog} />
      <NavBar />
    </div>
  );
}
