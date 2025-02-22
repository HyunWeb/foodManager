import React, { useEffect } from "react";
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
const SelectContents = styled(SelectContent)`
  background-color: white;
`;
const SelectItems = styled(SelectItem)`
  box-sizing: border-box;
  padding: 0 10px;
  &:hover {
    color: white;
    background-color: #ffac46;
  }
`;
export default function SelectBlockUi({
  OptionState,
  setOptionState,
  Data,
  title,
  placeholder,
}: {
  OptionState: string | null;
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
        value={OptionState ? [OptionState] : undefined} // 타입 맞추기 용도 <string[] : undefined>
        onValueChange={(value) => setOptionState(value.value[0])}
      >
        <SelectTrigger>
          <SelectValueText placeholder={placeholder} />
        </SelectTrigger>
        <SelectContents>
          {Data.map((item) => (
            <SelectItems item={item} key={item.value}>
              {item.label}
            </SelectItems>
          ))}
        </SelectContents>
      </SelectRoot>
    </Container>
  );
}
