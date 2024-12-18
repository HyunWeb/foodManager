import React from "react";
import styled from "styled-components";
import ButtonAtom from "../atoms/ButtonAtom";

interface ButtonGroupProps {
  onConfirm: () => void;
  onCancel?: () => void;
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px;
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({ onConfirm, onCancel }) => {
  return (
    <ButtonContainer>
      <ButtonAtom
        text="확인"
        label="확인 버튼"
        buttontype="login"
        onClick={onConfirm}
        type="button"
      />
      {onCancel && (
        <ButtonAtom
          text="취소"
          label="취소 버튼"
          buttontype="signUp"
          onClick={onCancel}
          type="button"
        />
      )}
    </ButtonContainer>
  );
};

export default ButtonGroup;
