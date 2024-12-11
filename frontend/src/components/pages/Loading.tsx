import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../molecules/Logo";

export default function Loading() {
  const naviagte = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      naviagte("/main");
    }, 2000);

    return () => clearTimeout(timer);
  }, [naviagte]);

  return <Logo />;
}
