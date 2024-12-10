import React from "react";
import { Avatar } from "../ui/avatar";

interface ProfileProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  name?: string;
  src?: string;
}

export default function Profileimg({
  size = "2xl",
  name = "Anonymous User",
  src = "/defaultProfileImage.jpg",
}: ProfileProps) {
  return <Avatar size={size} name={name} src={src} />;
}
