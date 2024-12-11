import React from "react";
import styled from "styled-components";

import InputForm from "../atoms/InputForm";
import { Field } from "../ui/field";
import IconButtonAtom from "../atoms/IconButtonAtom";

const Container = styled.div`
  display: flex;
`;

interface TwoInputProps {
  placeholder1: string;
  placeholder2: string;
  label?: string;
  helperText?: string;
  required?: boolean;
  IconLabel: string;
}

export default function TwoInput({
  placeholder1,
  placeholder2,
  label,
  helperText,
  required = false,
  IconLabel,
}: TwoInputProps) {
  return (
    <Field label={label} required={required} helperText={helperText}>
      <Container>
        <InputForm
          placeholder={placeholder1}
          marginRight="10px"
          isLarge={false}
        />
        <InputForm
          placeholder={placeholder2}
          marginRight="10px"
          isLarge={false}
        />
        <IconButtonAtom label={IconLabel} />
      </Container>
    </Field>
  );
}
