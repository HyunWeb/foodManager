import React from "react";
import Input from "../atoms/Input";
import Label from "../atoms/Label";
import ValidationMessage from "../atoms/Validation Message";

interface InputFieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  value?: string;
  placeholder: string;
  errorMessage?: string;
}

export default function InputField({
  label,
  id,
  name,
  type,
  placeholder,
  errorMessage,
}: InputFieldProps) {
  return (
    <div className="input-field">
      <Label htmlFor={id} text={label} />
      <Input type={type} id={id} name={name} placeholder={placeholder} />
      {errorMessage && <ValidationMessage message={errorMessage} />}
    </div>
  );
}
