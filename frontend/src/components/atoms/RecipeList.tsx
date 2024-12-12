import React from "react";

interface Props {
  text: string;
  title?: string;
}

export default function RecipeList({ text, title }: Props) {
  return (
    <li>
      {title ? (
        <>
          <span>{title}</span>
          <br />
          {text}
        </>
      ) : (
        <>{text}</>
      )}
    </li>
  );
}
