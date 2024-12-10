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
import ImageCard from "../atoms/ImageCard";
import IconButtonAtom from "../atoms/IconButtonAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import Anchor from "../atoms/Anchor";
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
      <HStack>
        <Button>Click me</Button>
        <Button>Click me</Button>
      </HStack>
      <Select options={options} />
      <Rating defaultValue={3} size="sm" />
      <RatingTag text={"5.0"} />
      <Profileimg />
      <Logolmg />
      <LinkAtom url="/" label="HOME" status="House" />
      <LinkAtom url="/" label="HOME" status="Data" />
      <LinkAtom url="/" label="HOME" status="Box" />
      <LinkAtom url="/" label="HOME" status="Profile" />
      <InputForm
        label="Email"
        helperText="예시글자입니다."
        required={true}
        placeholder="이메일을 입력하세요"
      />
      <ImageCard />
      <IconButtonAtom label="abc" />
      <ButtonAtom />
      <Anchor href="#" text="Link" />
    </div>
  );
}
