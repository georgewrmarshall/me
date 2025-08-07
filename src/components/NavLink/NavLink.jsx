import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledNavLink } from "./styles";

export const NavLink = ({ children, ...props }) => {
  return (
    <StyledNavLink {...props}>
      {children}
    </StyledNavLink>
  );
};

NavLink.propTypes = {
  /**
   * The content of the NavLink
   */
  children: PropTypes.node,
};
