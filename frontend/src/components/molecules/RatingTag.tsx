import React from "react";
import { Badge, Stack } from "@chakra-ui/react";
import { HiAtSymbol, HiStar } from "react-icons/hi";

interface Props {
  text: string;
}

export default function RatingTag({ text = "0.0" }: Props) {
  return (
    <Badge variant="solid" bg="#FE8D00" color="#121212">
      <HiStar />
      {text}
    </Badge>
  );
}
