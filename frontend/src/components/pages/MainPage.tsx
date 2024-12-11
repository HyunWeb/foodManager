import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { HStack, IconButton } from "@chakra-ui/react";
import axios from "axios";
import Select from "../atoms/Select";
import { Rating } from "../ui/rating";
import RatingTag from "../atoms/RatingTag";
import Profileimg from "../atoms/Profileimg";
import Logolmg from "../atoms/LogoImg";
import LinkAtom from "../atoms/LinkAtom";
import InputForm from "../atoms/InputForm";
import IconButtonAtom from "../atoms/IconButtonAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import Anchor from "../atoms/Anchor";
import Logo from "../molecules/Logo";
import TwoInput from "../molecules/TwoInput";
import OneInput from "../molecules/OneInput";
import TextBoxUi from "../molecules/TextBoxUi";
import ListTextBox from "../molecules/ListTextBox";
import SelectBlockUi from "../molecules/SelectBlockUi";
import ThreeSelectBlockUi from "../molecules/ThreeSelectBlockUI";
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
    console.log(items); //undefined
  }, []);

  return (
    <div>
      {items ? items.name : "Loading..."}

      <SelectBlockUi
        text="제목입니다3."
        options={[
          { id: "1", text: "test" },
          { id: "2", text: "test2" },
        ]}
      />
      <ThreeSelectBlockUi
        text="제목입니다3."
        options1={[
          { id: "1", text: "test" },
          { id: "2", text: "test2" },
        ]}
        options2={[
          { id: "1", text: "test4" },
          { id: "2", text: "test5" },
        ]}
        options3={[
          { id: "1", text: "test6" },
          { id: "2", text: "test7" },
        ]}
      />
    </div>
  );
}
