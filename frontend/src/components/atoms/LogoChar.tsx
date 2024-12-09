import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export default function LogoChar({ text }: Props) {
  return <Text as="h1">{text}</Text>;
}
