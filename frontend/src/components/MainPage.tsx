import React, { useEffect, useState } from "react";
import axios from "axios";

interface Item {
  name: string;
}

export default function MainPage() {
  const [items, setItems] = useState<Item>();
  const api = process.env.REACT_APP_ROUTE;

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
    console.log(items); //undefined
  }, []);

  return <div>{items ? items.name : "Loading..."}</div>;
}
