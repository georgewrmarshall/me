import React from "react";

// Styles
import { StyledNavbarToggle } from "./styles";

export const NavbarToggle = ({ onClick, open, ...props }) => {
  return (
    <StyledNavbarToggle onClick={onClick} open={open} type="button" aria-label="Toggle Menu" {...props}>
      <div className="icon">
        <div className="icon__bar" />
      </div>
    </StyledNavbarToggle>
  );
};
