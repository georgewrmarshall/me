import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledLinkPrimary } from "./styles";

export const Link = ({ onClick, children, ...props }) => {
  return (
    <StyledLinkPrimary onClick={onClick} {...props}>
      {children}
    </StyledLinkPrimary>
  );
};

Link.propTypes = {
  /**
   * The content of the Link
   */
  children: PropTypes.node,
  /**
   * The onClick of the Link
   */
  onClick: PropTypes.func,
};
