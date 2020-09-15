import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledTitle } from "./styles";

export const Title = ({ children, ...props }) => {
  return (
    <StyledTitle {...props}>
      {children}
    </StyledTitle>
  );
};

Title.propTypes = {
  /**
   * The content of the Title
   */
  children: PropTypes.node,
};
