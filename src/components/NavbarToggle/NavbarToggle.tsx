import React from 'react';

import { StyledNavbarToggle } from './styles';

interface NavbarToggleProps {
  onClick?: () => void;
  open?: boolean;
  [key: string]: any;
}

export const NavbarToggle = ({
  onClick,
  open,
  ...props
}: NavbarToggleProps) => {
  return (
    <StyledNavbarToggle
      onClick={onClick}
      open={open}
      type="button"
      aria-label="Toggle Menu"
      {...props}
    >
      <div className="icon">
        <div className="icon__bar" />
      </div>
    </StyledNavbarToggle>
  );
};
