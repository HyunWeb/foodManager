import React from "react";
import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  colorScheme?: string;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  colorScheme = "orange",
  size = "md",
}) => {
  return (
    <ChakraButton colorScheme={colorScheme} size={size} onClick={onClick}>
      {label}
    </ChakraButton>
  );
};

export default Button;
