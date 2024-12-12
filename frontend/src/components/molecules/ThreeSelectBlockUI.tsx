import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import Select from "../atoms/Select";

interface ThreeSelectBlockUiProps {
  text: string;
  options1: { id: string; text: string }[];
  options2: { id: string; text: string }[];
  options3: { id: string; text: string }[];
}

const WrapSelect = styled.div`
  display: flex;
  justify-content: center;
`;

export default function ThreeSelectBlockUi({
  text,
  options1,
  options2,
  options3,
}: ThreeSelectBlockUiProps) {
  return (
    <div>
      <HeadingAtom level={3} color="#121212" marginBottom="10px">
        {text}
      </HeadingAtom>
      <WrapSelect>
        <Select options={options1} width="100px" height="50px" mr="10px" />
        <Select options={options2} width="100px" height="50px" mr="10px" />
        <Select options={options3} width="100px" height="50px" />
      </WrapSelect>
    </div>
  );
}
