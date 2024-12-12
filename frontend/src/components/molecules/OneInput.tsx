import React from "react";
import styled from "styled-components";
import InputForm from "../atoms/InputForm";
import { Field } from "../ui/field";

interface OneInputProps {
  placeholder: string;
  label?: string;
  helperText?: string;
  required?: boolean;
}
const Container = styled.div`
  display: flex;
`;

export default function OneInput({
  placeholder,
  label,
  required,
  helperText,
}: OneInputProps) {
  return (
    <Field label={label} required={required} helperText={helperText}>
      <Container>
        <InputForm
          placeholder={placeholder}
          $isLarge={true}
          marginRight="10px"
        />
      </Container>
    </Field>
  );
}
