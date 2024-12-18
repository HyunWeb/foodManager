import React from "react";
import styled from "styled-components";
import HeadingAtom from "../atoms/HeadingAtom";
import UserInfo from "../molecules/UserInfo";
import IconButtonAtom from "../atoms/IconButtonAtom";

const Container = styled.div`
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  padding: 20px;
  background-color: #ffffff;
  position: relative;
`;

export default function MyProfile() {
  return (
    <Container>
      <HeadingAtom level={2}>내 프로필</HeadingAtom>
      <UserInfo name="황종현" birthday="1997/05/24" gender="남성" />
      <IconButtonAtom
        label="프로필 수정 버튼"
        icontype="Notepen"
        variant="ghost"
        BGcolor="transparent"
        color="#121212"
        size="25px"
        position="absolute"
        top="10px"
        right="20px"
      />
    </Container>
  );
}
