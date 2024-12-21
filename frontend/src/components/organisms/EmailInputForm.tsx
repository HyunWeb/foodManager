import React, { useState } from "react";
import InputField from "../molecules/InputField";
import ButtonAtom from "../atoms/ButtonAtom";

interface EmailInputFormProps {
  onEmailSubmit: (email: string) => void;
}

const EmailInputForm: React.FC<EmailInputFormProps> = ({ onEmailSubmit }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="이메일"
        id="email"
        name="email"
        type="email"
        value={email}
        placeholder="이메일을 입력하세요"
        onChange={(e) => setEmail(e.target.value)}
      />
      <ButtonAtom text="확인" buttontype="submit" type="submit" />
    </form>
  );
};

export default EmailInputForm;
