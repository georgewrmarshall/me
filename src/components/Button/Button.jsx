import React from "react";
import PropTypes from "prop-types";

// Styles
import { StyledButton } from "./styles";

export const Button = ({ onClick, children, disabled, ...props }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} type="button" {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** 
   * The content of the button
   */
  children: PropTypes.node,
  /**
   * Whether the button is disabled
   */
  disabled: PropTypes.bool,
  /**
   * The onClick function of the button
   */
  onClick: PropTypes.func
};
