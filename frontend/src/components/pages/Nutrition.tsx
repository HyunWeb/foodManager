import React from "react";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import Wrapgraph from "../molecules/Wrapgraph";
import FoodHistory from "../organisms/FoodHistory";

export default function Nutrition() {
  return (
    <div>
      <Header />
      <Wrapgraph />
      <FoodHistory category="먹은 음식" />
      <NavBar />
    </div>
  );
}
