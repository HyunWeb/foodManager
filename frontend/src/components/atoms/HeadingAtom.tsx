import React from "react";
import { Heading } from "@chakra-ui/react";

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6; // h1 ~ h6을 지원
}

export default function H4({ children, level }: HeadingProps) {
  return (
    <Heading
      as={`h${level}`}
      size={level === 1 ? "2xl" : level === 2 ? "xl" : "lg"}
    >
      {children}
    </Heading>
  );
}
