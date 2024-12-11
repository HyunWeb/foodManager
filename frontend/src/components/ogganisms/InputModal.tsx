import React from "react";
import styled from "styled-components";
import IconButtonAtom from "../atoms/IconButtonAtom";

interface InputModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalPage = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 5;
  width: 100vw;
  height: 100%;
  background-color: #2b2b2bc7;
  /* transform: translateY(${({ isOpen }) => (isOpen ? "0" : "100%")}); */
  /* display: ${({ isOpen }) => (isOpen ? "block" : "none")}; */
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: 0;
  transition-duration: 500ms;
`;

const ModalContent = styled.div<{ isOpen: boolean }>`
  position: absolute;
  z-index: 10;
  width: 100vw;
  height: 95%;
  background-color: #ffffff;
  top: ${({ isOpen }) => (isOpen ? "5%" : "100%")};
  transition-duration: 500ms;
  border-radius: 20px 20px 0 0;
  padding: 10px;
  padding-top: 50px;
`;

export default function InputModal({ isOpen, onClose }: InputModalProps) {
  return (
    <ModalPage isOpen={isOpen}>
      <ModalContent isOpen={isOpen}>
        <IconButtonAtom
          label="닫기버튼"
          icontype="ex"
          variant="solid"
          BGcolor="null"
          color="#404040"
          size="32px"
          onClick={onClose}
          position="absolute"
          right="10px"
          top="10px"
        />
        InputModal
      </ModalContent>
    </ModalPage>
  );
}
