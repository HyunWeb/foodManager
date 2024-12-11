import React from "react";
import styled from "styled-components";
import { IconButton } from "@chakra-ui/react";
import { BsTrash3 } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import { TbArrowBigUpLine } from "react-icons/tb";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BsBox2Heart } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { PiNotePencilFill } from "react-icons/pi";
interface IconButtonProps {
  label: string;
  BGcolor: string;
  variant: "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  color?: string;
  icontype:
    | "trash"
    | "plus"
    | "bell"
    | "search"
    | "home"
    | "leftArrow"
    | "rightArrow"
    | "upArrow"
    | "ex"
    | "heart"
    | "clock"
    | "people"
    | "BigUpArrow"
    | "chart"
    | "heartbox"
    | "profile"
    | "bell"
    | "hiArrow" // 네모로 들어가는 모양 화살표
    | "Exclamation"
    | "question"
    | "checkMark"
    | "Notepen";
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
      case "home":
        return <IoHomeOutline />;
      case "leftArrow":
        return <FaArrowCircleLeft />;
      case "rightArrow":
        return <FaArrowCircleRight />;
      case "upArrow":
        return <FaArrowCircleUp />;
      case "ex":
        return <FaTimesCircle />;
      case "heart":
        return <FaHeart />;
      case "clock":
        return <GiAlarmClock />;
      case "people":
        return <IoPeople />;
      case "BigUpArrow":
        return <TbArrowBigUpLine />;
      case "chart":
        return <HiOutlineChartSquareBar />;
      case "heartbox":
        return <BsBox2Heart />;
      case "profile":
        return <IoPersonCircleOutline />;
      case "hiArrow":
        return <HiArrowRightEndOnRectangle />;
      case "Exclamation":
        return <FaExclamationTriangle />;
      case "question":
        return <FaQuestionCircle />;
      case "checkMark":
        return <BsPatchCheckFill />;
      case "Notepen":
        return <PiNotePencilFill />;

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
