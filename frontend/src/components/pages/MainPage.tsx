import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../ogganisms/Header";
import SearchBlock from "../molecules/SearchBlock";
import NavBar from "../ogganisms/NavBar";
interface Item {
  name: string;
}

export default function MainPage() {
  const [items, setItems] = useState<Item>();
  const api = process.env.REACT_APP_ROUTE;
  const options = [
    { id: "1", text: "Option 1" },
    { id: "2", text: "Option 2" },
    { id: "3", text: "Option 3" },
  ];

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`${api}/api/items`);
        setItems(response.data); // {name: "jonghyun"}
      } catch (error) {
        console.error("Error fetching items: ", error);
      }
    };
    fetchItems();
  }, []);

  return (
    <div>
      <Header />
      <SearchBlock />
      {items ? items.name : "Loading..."}
      <NavBar />
    </div>
  );
}
