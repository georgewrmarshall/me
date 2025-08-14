import React from 'react';

import { StyledHeadline } from './styles';

interface HeadlineProps {
  children?: React.ReactNode;
  [key: string]: any;
}

export const Headline = ({ children, ...props }: HeadlineProps) => {
  return <StyledHeadline {...props}>{children}</StyledHeadline>;
};
