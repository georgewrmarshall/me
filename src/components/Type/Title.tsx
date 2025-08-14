import React from "react";

import { StyledTitle } from "./styles";

interface TitleProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Title = ({ children, ...props }: TitleProps) => {
  return (
    <StyledTitle {...props}>
      {children}
    </StyledTitle>
  );
};