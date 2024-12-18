import React from "react";
import { useNavigate } from "react-router-dom";
import IconButtonAtom from "./IconButtonAtom";

export default function BackButton({
  position = "relative",
}: {
  position?: string;
}) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 브라우저 히스토리에서 뒤로가기
  };
  return (
    <IconButtonAtom
      label="뒤로 가기 버튼"
      onClick={goBack}
      icontype="leftArrow"
      BGcolor="transparent"
      variant="ghost"
      color="#FE8D00"
      size="30px"
      position={position}
      left="10px"
    />
  );
}
