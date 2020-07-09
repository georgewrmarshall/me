import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledContainer } from "./styles";

export const Container = ({ children, ...props }) => {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
};

Container.propTypes = {
  /**
   * The content of the Container
   */
  children: PropTypes.node,
};
