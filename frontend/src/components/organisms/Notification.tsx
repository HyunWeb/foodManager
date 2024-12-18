import React from "react";
import styled from "styled-components";
import NotificationHeader from "../molecules/NotificationHeader";
import NotificationBody from "../molecules/NotificationBody";
import ButtonGroup from "../molecules/ButtonGroup";

const NotificationContainer = styled.div`
  width: 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

interface NotificationProps {
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  onConfirm: () => void;
  onCancel?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  title,
  message,
  type,
  onConfirm,
  onCancel,
}) => {
  return (
    <NotificationContainer>
      {/* Header */}
      <NotificationHeader title={title} type={type} />

      {/* Body */}
      <NotificationBody message={message} />

      {/* Buttons */}
      <ButtonGroup onConfirm={onConfirm} onCancel={onCancel} />
    </NotificationContainer>
  );
};

export default Notification;
