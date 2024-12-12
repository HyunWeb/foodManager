import React from "react";
interface Props {
  text: string;
}
export default function Span({ text }: Props) {
  return <span>{text}</span>;
}
