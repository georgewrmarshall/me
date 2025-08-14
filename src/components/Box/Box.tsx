import React from "react";
import { SpaceProps, FlexboxProps, GridProps, LayoutProps, BorderProps } from 'styled-system';

// Styles
import { StyledBox } from "./styles";

interface BoxProps extends SpaceProps, FlexboxProps, GridProps, LayoutProps, BorderProps {
  children?: React.ReactNode;
  fluid?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  [key: string]: any;
}

export const Box: React.FC<BoxProps> = ({ children, fluid, ...props }) => {
  return (
    <StyledBox fluid={fluid} {...props}>
      {children}
    </StyledBox>
  );
};

