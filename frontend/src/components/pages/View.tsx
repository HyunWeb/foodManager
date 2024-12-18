import React from "react";
import NavBar from "../organisms/NavBar";
import Header from "../organisms/Header";
import { useParams } from "react-router-dom";
import ViewTemplate from "../templates/ViewTemplate";

const content = { id: 1, title: "요리제목1", detail: "부가설명1", rating: 3.5 };

export default function View() {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return (
    <div>
      {/* <Header /> */}
      <ViewTemplate />
      <NavBar />
    </div>
  );
}
