import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import Select from "../atoms/Select";

interface SelectBlockUiProps {
  text: string;
  options: { id: string; text: string }[];
}

const WrapSelect = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SelectBlockUi({ text, options }: SelectBlockUiProps) {
  return (
    <div>
      <HeadingAtom level={3} color="#121212" marginBottom="10px">
        {text}
      </HeadingAtom>
      <WrapSelect>
        <Select options={options} width="70vw" height="50px" />
      </WrapSelect>
    </div>
  );
}
