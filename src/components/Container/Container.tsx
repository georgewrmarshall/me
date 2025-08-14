import React from "react";

import { StyledContainer } from "./styles";

interface ContainerProps {
  children?: React.ReactNode;
  fluid?: boolean;
  [key: string]: any;
}

export const Container = ({ children, fluid, ...props }: ContainerProps) => {
  return (
    <StyledContainer fluid={fluid} {...props}>
      {children}
    </StyledContainer>
  );
};

