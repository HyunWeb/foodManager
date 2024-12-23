import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { PasswordResetContext } from "../pages/PasswordResetPage";
interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const passwordcontext = useContext(PasswordResetContext);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      passwordcontext?.setStep(1);
      return;
    }
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [onTimeUp]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return <span>{formatTime(timeLeft)}</span>;
};

export default Timer;
