import React from "react";
import styled from "styled-components";
import { IconButton } from "@chakra-ui/react";
import { BsTrash3 } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
interface IconButtonProps {
  label: string;
  BGcolor: string;
  variant: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  icontype: "trash" | "plus";
}

const IconButtons = styled(IconButton)<{ BGcolor: string }>`
  background-color: ${({ BGcolor }) =>
    BGcolor === "orange" ? "#fe8d00" : "transparent"};
  border-radius: 10px;
  align-self: center;
`;

export default function IconButtonAtom({
  label,
  BGcolor,
  variant = "solid",
  icontype,
}: IconButtonProps) {
  const renderIcon = () => {
    switch (icontype) {
      case "trash":
        return <BsTrash3 />;
      case "plus":
        return <BsPlusCircle />;
      default:
        return null;
    }
  };
  return (
    <IconButtons aria-label={label} variant={variant} BGcolor={BGcolor}>
      {renderIcon()}
    </IconButtons>
  );
}
