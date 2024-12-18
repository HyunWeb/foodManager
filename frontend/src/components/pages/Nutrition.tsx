import React from "react";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import Wrapgraph from "../molecules/Wrapgraph";
import FoodHistory from "../organisms/FoodHistory";
import axios from "axios";

export default function Nutrition() {

  const route = process.env.REACT_APP_ROUTE;
  const data = axios({
    method: "GET",
    url: `${route}/foodlog`,
    withCredentials: true,
  }).then((res) => {
    const {log, kcalPerDay} = res.data;
    console.log(log, kcalPerDay);
  });

  return (
    <div>
      <Header />
      <Wrapgraph />
      <FoodHistory category="먹은 음식" type="food" />
      <NavBar />
    </div>
  );
}
