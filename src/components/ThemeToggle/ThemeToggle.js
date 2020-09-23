import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { StyledThemeToggle } from './styles';

export const ThemeToggle = ({ checked, onChange, ...props }) => {
  return (
    <StyledThemeToggle darkMode={checked} {...props}>
      <label htmlFor="darkMode">
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
        />
      </label>
    </StyledThemeToggle>
  );
};

ThemeToggle.propTypes = {
  /**
   * Whether the input is checked or darkmode is on
   */
  checked: PropTypes.bool,
  /**
   * The onChange function of the input
   */
  onChange: PropTypes.func,
};
