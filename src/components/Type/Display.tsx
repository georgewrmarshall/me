import React from "react";

import { StyledDisplay } from "./styles";

interface DisplayProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Display = ({ children, ...props }: DisplayProps) => {
  return (
    <StyledDisplay {...props}>
      {children}
    </StyledDisplay>
  );
};