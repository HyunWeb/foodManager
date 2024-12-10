import React from "react";

interface AnchorProps {
  href: string;
  label: string;
  target?: "_self" | "_blank" | "_parent" | "_top"; // 링크 열기 옵션
  rel?: string; // 보안 관련 속성 (예: noreferrer, noopener 등)
  style?: React.CSSProperties; // 사용자 정의 스타일
  className?: string; // 추가 클래스
}

const Anchor: React.FC<AnchorProps> = ({
  href,
  label,
  target = "_self",
  rel,
  style,
  className,
}) => {
  return (
    <a
      href={href}
      target={target}
      rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)} // 보안 속성 추가
      style={style}
      className={className}
    >
      {label}
    </a>
  );
};

export default Anchor;
