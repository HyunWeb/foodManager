import React from "react";
import styled from "styled-components";
import ButtonAtom from "../atoms/ButtonAtom";

interface ButtonGroupProps {
  onConfirm: () => void;
  onCancel?: () => void; // onCancel은 선택적 prop
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* 버튼 사이의 간격 */
  padding: 10px; /* 여백 */
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onConfirm, onCancel }) => {
  return (
    <ButtonContainer>
      {/* 확인 버튼 */}
      <ButtonAtom label="확인" onClick={onConfirm} variant="solid" />

      {/* 취소 버튼 (옵션) */}
      {onCancel && (
        <ButtonAtom label="취소" onClick={onCancel} variant="outline" />
      )}
    </ButtonContainer>
  );
};

export default ButtonGroup;
