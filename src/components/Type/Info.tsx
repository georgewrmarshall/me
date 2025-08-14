import React from "react";

import { StyledInfo } from "./styles";

interface InfoProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Info = ({ children, ...props }: InfoProps) => {
  return (
    <StyledInfo {...props}>
      {children}
    </StyledInfo>
  );
};