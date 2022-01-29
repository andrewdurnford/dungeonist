import React from "react";
import styled from "styled-components";

const StyledNotification = styled.div`
  display: inline-block;
  border-radius: 4px;
  padding: 3px 8px;
  border: 1px solid ${({ theme }) => theme.colors.red200};
  background-color: ${({ theme }) => theme.colors.red50};
  color: ${({ theme }) => theme.colors.red400};
`;

interface NotificationProps {
  children: React.ReactNode;
}

function Notification({ children }: NotificationProps) {
  return <StyledNotification>{children}</StyledNotification>;
}

export default Notification;
