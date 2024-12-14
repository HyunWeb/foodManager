import React from "react";
import NavBar from "../organisms/NavBar";
import Header from "../organisms/Header";

export default function MainPageTemplate({ children }) {
  return (
    <div className>
      <NavBar />
      <Heade />
      <main>{children}</main>
    </div>
  );
}
