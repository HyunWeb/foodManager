import React from "react";
import styled from "styled-components";
import { createListCollection, Text } from "@chakra-ui/react";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "../ui/select";
import { text } from "node:stream/consumers";
import { PiPlaceholder } from "react-icons/pi";

const Container = styled.div`
  padding-top: 20px;
`;

export default function SelectBlockUi({
  OptionState,
  setOptionState,
  Data,
  title,
  placeholder,
}: {
  OptionState: string;
  setOptionState: (gender: string) => void;
  Data: { label: string; value: string }[];
  title: String;
  placeholder: string;
}) {
  const DataCollection = createListCollection({ items: Data });
  return (
    <Container>
      <Text fontWeight="bold" mb="8px">
        {title}
      </Text>
      <SelectRoot
        collection={DataCollection}
        size="sm"
        width="240px"
        onValueChange={(value) => setOptionState(value.value[0])}
      >
        <SelectTrigger>
          <SelectValueText placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {Data.map((item) => (
            <SelectItem item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Container>
  );
}
