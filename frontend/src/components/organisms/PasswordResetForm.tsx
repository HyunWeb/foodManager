import React, { useState } from "react";
import InputField from "../molecules/InputField";
import ButtonAtom from "../atoms/ButtonAtom";

interface PasswordResetFormProps {
  onPasswordReset: (newPassword: string) => void;
}

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({
  onPasswordReset,
}) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      onPasswordReset(newPassword);
    } else {
      setError("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="새 비밀번호"
        id="newPassword"
        name="newPassword"
        type="password"
        value={newPassword}
        placeholder="새 비밀번호를 입력하세요"
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <InputField
        label="비밀번호 확인"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        placeholder="비밀번호를 다시 입력하세요"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ButtonAtom text="비밀번호 재설정" buttontype="submit" type="submit" />
    </form>
  );
};

export default PasswordResetForm;
