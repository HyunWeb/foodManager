import React from "react";
import Option from "./Option";

interface SelectProps {
  options: { id: string; text: string }[];
}

export default function Select({ options }: SelectProps) {
  return (
    <select>
      {options.map((option) => {
        return <Option key={option.id} text={option.text} />;
      })}
    </select>
  );
}
