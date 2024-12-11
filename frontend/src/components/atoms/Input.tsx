import React from "react";

interface InputProps {
  type: string;
  id: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

export default function Input({
  type,
  id,
  name,
  placeholder,
  required,
}: InputProps) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
}
