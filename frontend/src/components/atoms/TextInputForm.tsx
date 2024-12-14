import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { Field } from "../ui/field";
import { sign } from "crypto";

interface TextInputProps {
  placeholder: string;
  label: string;
  value: string;
  setValue: (e: string) => void;
  invalid?: boolean;
}

export default function TextInput({
  placeholder,
  label,
  value,
  setValue,
  invalid = false,
}: TextInputProps) {
  return (
    <Field
      label={label}
      fontWeight="bold"
      marginBottom="20px"
      errorText={"이메일 주소에는 @가 포함되어야 합니다."}
      invalid={invalid}
      required
    >
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Field>
  );
}
