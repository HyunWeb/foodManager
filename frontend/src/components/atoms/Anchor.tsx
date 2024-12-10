import React from "react";
import { Link } from "@chakra-ui/react";

interface AnchorProps {
  href: string;
  text: string;
}

export default function Anchor({ href, text }: AnchorProps) {
  return <Link href={href}>{text}</Link>;
}