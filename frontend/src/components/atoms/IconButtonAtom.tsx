import React from "react";
import { IconButton } from "@chakra-ui/react";
interface IconButtonProps {
  label: string;
}
export default function IconButtonAtom({ label }: IconButtonProps) {
  return <IconButton aria-label={label} variant="solid"></IconButton>;
}
