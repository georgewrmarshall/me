import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledBox } from "./styles";

export const Box = ({ children, fluid, ...props }) => {
  return (
    <StyledBox fluid={fluid} {...props}>
      {children}
    </StyledBox>
  );
};

Box.propTypes = {
  /**
   * The content of the Box
   */
  children: PropTypes.node,
};
