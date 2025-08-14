import React from 'react';

import { StyledLinkPrimary } from './styles';

interface LinkProps {
  onClick?: () => void;
  children?: React.ReactNode;
  [key: string]: any;
}

export const Link = ({ onClick, children, ...props }: LinkProps) => {
  return (
    <StyledLinkPrimary onClick={onClick} {...props} as={props.as}>
      {children}
    </StyledLinkPrimary>
  );
};
