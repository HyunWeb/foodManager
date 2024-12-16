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
`;

const Button = styled.button`
  cursor: pointer;
`;

export default function NavBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Container>
        <InputModal $isOpen={isModalOpen} onClose={closeModal} />
        <LinkAtom url="/main" label="홈 페이지" status="House" />
        <LinkAtom url="/nutrition" label="식단분석 페이지" status="Data" />
        <Button onClick={openModal}>
          <BsPlusCircle size="32" />
        </Button>
        <LinkAtom url="/myfood" label="재료 관리 페이지" status="Box" />
        <LinkAtom url="/mypage" label="마이 페이지" status="Profile" />
      </Container>
    </>
  );
}
