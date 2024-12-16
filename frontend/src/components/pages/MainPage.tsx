import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import SearchBlock from "../molecules/SearchBlock";
import SwitchTab from "../molecules/SwitchTab";
import RecipeImgBox from "../molecules/RecipeImgBox";
import RecipeTemplate from "../templates/RecipeTemplate";
import Header from "../organisms/Header";
import NavBar from "../organisms/NavBar";
import FeedTemplate from "../templates/FeedTemplate";
interface Item {
  name: string;
}
const Container = styled.div`
  position: relative;
`;
export default function MainPage() {
  const [items, setItems] = useState<Item>();
  const [selected, setSelected] = useState(1); // 탭전환
  const api = process.env.REACT_APP_ROUTE;
  const options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
  ];

  // useEffect(() => {
  //   const fetchItems = async () => {
  //     try {
  //       const response = await axios.get(`${api}/api/items`);
  //       setItems(response.data); // {name: "jonghyun"}
  //     } catch (error) {
  //       console.error("Error fetching items: ", error);
  //     }
  //   };
  //   fetchItems();
  // }, []);

  return (
    <Container>
      <Header />
      <SearchBlock />
      <SwitchTab
        menu1="레시피"
        menu2="게시글"
        selected={selected}
        setSelected={setSelected}
      />
      {selected === 1 ? <RecipeTemplate /> : <FeedTemplate />}

      {/* {items ? items.name : "Loading..."} */}
      <NavBar />
    </Container>
  );
}
