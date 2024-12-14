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

const Container = styled.div`
  padding-top: 20px;
`;

export default function SelectBlockUi({
  genderState,
  setGenderState,
}: {
  genderState: string;
  setGenderState: (gender: string) => void;
}) {
  const gender = [
    {
      label: `남성`,
      value: `male`,
    },
    {
      label: `여성`,
      value: `female`,
    },
  ];
  const genderCollection = createListCollection({ items: gender });
  return (
    <Container>
      <Text fontWeight="bold" mb="8px">
        성별
      </Text>
      <SelectRoot
        collection={genderCollection}
        size="sm"
        width="240px"
        onValueChange={(value) => setGenderState(value.value[0])}
      >
        <SelectTrigger>
          <SelectValueText placeholder="성별 " />
        </SelectTrigger>
        <SelectContent>
          {gender.map((item) => (
            <SelectItem item={item} key={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Container>
  );
}
