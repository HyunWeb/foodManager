import React, { useState } from "react";
import styled from "styled-components";
import EmailInputForm from "../organisms/EmailInputForm";
import VerificationCodeForm from "../organisms/VerificationCodeForm";
import PasswordResetForm from "../organisms/PasswordResetForm";

const Container = styled.div`
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`;

const StepWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const StyledEmailInputForm = styled(EmailInputForm)`
  width: 100%;
  margin-bottom: 20px;

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }

  label {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
    display: block;
  }
`;

const StyledVerificationCodeForm = styled(VerificationCodeForm)`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const StyledPasswordResetForm = styled(PasswordResetForm)`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }

  button {
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const PasswordResetPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  const handleEmailSubmit = (submittedEmail: string) => {
    setEmail(submittedEmail);
    setStep(2);
  };

  const handleCodeSubmit = (submittedCode: string) => {
    setVerificationCode(submittedCode);
    setStep(3);
  };

  const handlePasswordReset = (newPassword: string) => {
    alert("비밀번호가 성공적으로 변경되었습니다.");
  };

  return (
    <Container>
      <StepWrapper>
        <Title>비밀번호 재설정</Title>
        {step === 1 && <StyledEmailInputForm onEmailSubmit={handleEmailSubmit} />}
        {step === 2 && (
          <StyledVerificationCodeForm
            onCodeSubmit={handleCodeSubmit}
            initialTime={180}
          />
        )}
        {step === 3 && (
          <StyledPasswordResetForm onPasswordReset={handlePasswordReset} />
        )}
      </StepWrapper>
    </Container>
  );
};

export default PasswordResetPage;

