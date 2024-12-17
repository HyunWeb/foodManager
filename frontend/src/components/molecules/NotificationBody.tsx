import React from "react";
import Paragraph from "../atoms/Paragraph";

interface NotificationBodyProps {
  message: string;
}

const NotificationBody: React.FC<NotificationBodyProps> = ({ message }) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <Paragraph>{message}</Paragraph>
    </div>
  );
};

export default NotificationBody;
