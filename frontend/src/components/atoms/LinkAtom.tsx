import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@chakra-ui/react";
import { BsBox2Heart } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import { BsHouseDoor } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

interface LinkAtomProps {
  url: string;
  label: string;
  status: "House" | "Data" | "Box" | "Profile";
}

export default function LinkAtom({ url, label, status }: LinkAtomProps) {
  return (
    <Link to={url}>
      <IconButton
        aria-label={label}
        variant="ghost"
        size="lg"
        colorPalette={"orange"}
        color={"black"}
        fontSize="50px" // 아이콘 크기 키우기
      >
        {(() => {
          switch (status) {
            case "House":
              return <BsHouseDoor style={{ width: "30px", height: "30px" }} />;
            case "Data":
              return (
                <BsClipboardData style={{ width: "30px", height: "30px" }} />
              );
            case "Box":
              return <BsBox2Heart style={{ width: "30px", height: "30px" }} />;
            case "Profile":
              return (
                <BsPersonCircle style={{ width: "30px", height: "30px" }} />
              );
          }
        })()}
      </IconButton>
    </Link>
  );
}
