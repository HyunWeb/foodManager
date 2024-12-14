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

interface ThreeSelectBlockUiProps {
  birthDate: { year: string; month: string; day: string };
  setBirthDate: (date: { year: string; month: string; day: string }) => void;
}

const WrapSelect = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
const Container = styled.div`
  padding-top: 20px;
`;

export default function ThreeSelectBlockUi({
  birthDate,
  setBirthDate,
}: ThreeSelectBlockUiProps) {
  const yearOptions = Array.from({ length: 50 }, (_, i) => ({
    label: `${i + 1975}년`,
    value: `${i + 1975}`,
  }));
  const monthOptions = Array.from({ length: 12 }, (_, i) => ({
    label: `${i + 1}월`,
    value: `${i + 1}`,
  }));
  const dayOptions = Array.from({ length: 31 }, (_, i) => ({
    label: `${i + 1}일`,
    value: `${i + 1}`,
  }));
  const yearOptionList = createListCollection({ items: yearOptions });
  const monthOptionsList = createListCollection({ items: monthOptions });
  const dayOptionsList = createListCollection({ items: dayOptions });

  return (
    <Container>
      <Text fontWeight="bold" mb="8px">
        생년월일
      </Text>
      <WrapSelect>
        <SelectRoot
          collection={yearOptionList}
          size="sm"
          width="240px"
          onValueChange={(value) =>
            setBirthDate({ ...birthDate, year: value.value[0] })
          }
        >
          <SelectTrigger>
            <SelectValueText placeholder="년 " />
          </SelectTrigger>
          <SelectContent>
            {yearOptions.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <SelectRoot
          collection={monthOptionsList}
          size="sm"
          width="240px"
          onValueChange={(value) =>
            setBirthDate({ ...birthDate, month: value.value[0] })
          }
        >
          <SelectTrigger>
            <SelectValueText placeholder="월 " />
          </SelectTrigger>
          <SelectContent>
            {monthOptions.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
        <SelectRoot
          collection={dayOptionsList}
          size="sm"
          width="240px"
          onValueChange={(value) =>
            setBirthDate({ ...birthDate, day: value.value[0] })
          }
        >
          <SelectTrigger>
            <SelectValueText placeholder="일 " />
          </SelectTrigger>
          <SelectContent>
            {dayOptions.map((item) => (
              <SelectItem item={item} key={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      </WrapSelect>
    </Container>
  );
}
