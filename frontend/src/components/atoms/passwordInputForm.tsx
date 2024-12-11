import React from "react";
import { PasswordInput } from "@/components/ui/password-input";

const Demo = () => {
  return <PasswordInput />;
};
import { Field } from "../ui/field";

interface InputProps {
  label: string;
  helperText: string;
  required: boolean;
  placeholder: string;
}

export default function PasswordInputForm({
  label,
  helperText,
  required = false,
  placeholder,
}: InputProps) {
  return (
    <Field label={label} required={required} helperText={helperText}>
      <Input type="password" placeholder={placeholder} />
    </Field>
  );
}
