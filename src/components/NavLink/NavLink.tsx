import React from "react";

import { StyledNavLink } from "./styles";

interface NavLinkProps {
  children?: React.ReactNode;
  to?: string;
  activeClassName?: string;
  [key: string]: any;
}

export const NavLink = ({ children, ...props }: NavLinkProps) => {
  return (
    <StyledNavLink {...(props as any)}>
      {children}
    </StyledNavLink>
  );
};