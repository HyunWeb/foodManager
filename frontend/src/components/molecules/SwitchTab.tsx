import { table } from "console";
import React, { useState } from "react";
import styled from "styled-components";

interface SwitchTabProps {
  menu1: string;
  menu2: string;
  menu3?: string;
  $ThreeMenu?: boolean;
  selected: number;
  setSelected: (num: number) => void;
}

const Container = styled.div<{ $ThreeMenu?: boolean }>`
  height: 44px;
  border-bottom: 2px solid #e2e2e2;
  display: flex;
  justify-content: ${({ $ThreeMenu }) =>
    $ThreeMenu ? "space-around" : "center"};
`;

const ButtonTab = styled.button<{ $ThreeMenu?: boolean }>`
  height: 44px;
  width: ${({ $ThreeMenu }) => ($ThreeMenu ? "25%" : "35%")};
  font-size: 16px;
  font-weight: bold;
  border-bottom: 2px solid #121212;
  color: #121212;
  cursor: default;
`;
const DeSelectButton = styled(ButtonTab)`
  border-bottom: 2px solid #e2e2e2;
  font-weight: bold;
  color: #e2e2e2;
  cursor: pointer;
`;

export default function SwitchTab({
  menu1,
  menu2,
  menu3,
  $ThreeMenu = false,
  selected,
  setSelected,
}: SwitchTabProps) {
  if (!menu3) {
    $ThreeMenu = false;
  } else {
    $ThreeMenu = true;
  }

  const ClickTab = (num: number): void => {
    setSelected(num);
  };

  return (
    <Container $ThreeMenu={$ThreeMenu}>
      {selected === 1 ? (
        <ButtonTab $ThreeMenu={$ThreeMenu}>{menu1}</ButtonTab>
      ) : (
        <DeSelectButton $ThreeMenu={$ThreeMenu} onClick={() => ClickTab(1)}>
          {menu1}
        </DeSelectButton>
      )}
      {selected === 2 ? (
        <ButtonTab $ThreeMenu={$ThreeMenu}>{menu2}</ButtonTab>
      ) : (
        <DeSelectButton $ThreeMenu={$ThreeMenu} onClick={() => ClickTab(2)}>
          {menu2}
        </DeSelectButton>
      )}

      {$ThreeMenu &&
        (selected === 3 ? (
          <ButtonTab $ThreeMenu={$ThreeMenu}>{menu3}</ButtonTab>
        ) : (
          <DeSelectButton $ThreeMenu={$ThreeMenu} onClick={() => ClickTab(3)}>
            {menu3}
          </DeSelectButton>
        ))}
    </Container>
  );
}
