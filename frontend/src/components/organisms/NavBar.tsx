import React, { useState } from "react";
import styled from "styled-components";
import LinkAtom from "../atoms/LinkAtom";
import { BsPlusCircle } from "react-icons/bs";
import InputModal from "./InputModal";

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  z-index: 999;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    left: 0;
    top: 0;
    bottom: 0;
    width: 150px;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
    height: 100%;
    padding-left: 20px;
    padding-top: 40px;

    gap: 30px;
  }
`;

const Button = styled.button`
  cursor: pointer;

  @media (min-width: 768px) {
    position: fixed;
    right: 20px;
    bottom: 20px;
    color: #fe8d00;
  }
`;

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Container>
        <InputModal $isOpen={isModalOpen} onClose={closeModal} />
        <LinkAtom url="/main" label="홈" status="House" />
        <LinkAtom url="/nutrition" label="식단분석" status="Data" />
        <Button onClick={openModal}>
          <BsPlusCircle size="32" />
        </Button>
        <LinkAtom url="/myfood" label="재료 관리" status="Box" />
        <LinkAtom url="/mypage" label="내 정보" status="Profile" />
      </Container>
    </>
  );
}
