import React from "react";
import { Input } from "@chakra-ui/react";
import { Field } from "../ui/field";

interface InputProps {
  label: string;
  helperText: string;
  required: boolean;
  placeholder: string;
}

export default function InputForm({
  label,
  helperText,
  required = false,
  placeholder,
}: InputProps) {
  return (
    <Field label={label} required={required} helperText={helperText}>
      <Input placeholder={placeholder} />
    </Field>
  );
}
