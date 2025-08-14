import React from 'react';

import { StyledBody } from './styles';

interface BodyProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Body = ({ children, ...props }: BodyProps) => {
  return <StyledBody {...props}>{children}</StyledBody>;
};
