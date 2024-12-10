import React from "react";
interface Props {
  text: string;
}
export default function Option({ text }: Props) {
  return <option value={text}>{text}</option>;
}
