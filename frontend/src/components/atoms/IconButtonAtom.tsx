import React from "react";
import styled from "styled-components";
import { IconButton } from "@chakra-ui/react";
import { BsTrash3 } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
interface IconButtonProps {
  label: string;
  BGcolor: string;
  variant: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  icontype: "trash" | "plus" | "bell" | "search";
  color?: string;
}

const IconButtons = styled(IconButton)<{ BGcolor: string; color?: string }>`
  background-color: ${({ BGcolor }) =>
    BGcolor === "orange" ? "#fe8d00" : "transparent"};
  border-radius: 10px;
  align-self: center;
  color: ${({ color }) => (color === "orange" ? "#fe8d00" : "black")};
`;

export default function IconButtonAtom({
  label,
  BGcolor,
  variant = "solid",
  icontype,
  color,
}: IconButtonProps) {
  const renderIcon = () => {
    switch (icontype) {
      case "trash":
        return <BsTrash3 />;
      case "plus":
        return <BsPlusCircle />;
      case "bell":
        return <BsBell />;
      case "search":
        return <BsArrowRightCircleFill />;
      default:
        return null;
    }
  };
  return (
    <IconButtons
      aria-label={label}
      variant={variant}
      BGcolor={BGcolor}
      color={color}
    >
      {renderIcon()}
    </IconButtons>
  );
}
