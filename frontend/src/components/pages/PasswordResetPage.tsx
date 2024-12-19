import React, { useState } from "react";
import EmailInputForm from "../organisms/EmailInputForm";
import VerificationCodeForm from "../organisms/VerificationCodeForm";
import PasswordResetForm from "../organisms/PasswordResetForm";

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
    <div>
      {step === 1 && <EmailInputForm onEmailSubmit={handleEmailSubmit} />}
      {step === 2 && (
        <VerificationCodeForm
          onCodeSubmit={handleCodeSubmit}
          initialTime={180}
        />
      )}
      {step === 3 && (
        <PasswordResetForm onPasswordReset={handlePasswordReset} />
      )}
    </div>
  );
};

export default PasswordResetPage;
