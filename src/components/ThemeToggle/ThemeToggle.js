import React from 'react';
import PropTypes from 'prop-types';
import useDarkMode from 'use-dark-mode';

// Styles
import { StyledThemeToggle } from './styles';

export const ThemeToggle = ({ ...props }) => {
  const darkMode = useDarkMode(false);
  return (
    <StyledThemeToggle darkMode={darkMode.value} {...props}>
      <input
        checked={darkMode.value}
        onChange={darkMode.toggle}
        name="darkMode"
        id="darkMode"
        type="checkbox"
      />
      <label htmlFor="darkMode" />
    </StyledThemeToggle>
  );
};

ThemeToggle.propTypes = {
  /**
   * The content of the ThemeToggle
   */
  children: PropTypes.node,
  /**
   * The onClick of the button
   */
  onClick: PropTypes.func,
};
