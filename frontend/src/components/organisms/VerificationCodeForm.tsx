import React, { useState } from "react";
import InputField from "../molecules/InputField";
import ButtonAtom from "../atoms/ButtonAtom";
import Timer from "../atoms/Timer";

interface VerificationCodeFormProps {
  onCodeSubmit: (code: string) => void;
  initialTime: number;
}

const VerificationCodeForm: React.FC<VerificationCodeFormProps> = ({
  onCodeSubmit,
  initialTime,
}) => {
  const [code, setCode] = useState("");
  const [isTimeUp, setIsTimeUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isTimeUp) {
      onCodeSubmit(code);
    }
  };

  const handleTimeUp = () => {
    setIsTimeUp(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="인증번호"
        id="verificationCode"
        name="verificationCode"
        type="text"
        value={code}
        placeholder="인증번호를 입력하세요"
        onChange={(e) => setCode(e.target.value)}
      />
      <ButtonAtom
        text="확인"
        buttontype="submit"
        type="submit"
        disabled={isTimeUp}
      />
      <div>
        남은 시간: <Timer initialTime={initialTime} onTimeUp={handleTimeUp} />
      </div>
    </form>
  );
};

export default VerificationCodeForm;
