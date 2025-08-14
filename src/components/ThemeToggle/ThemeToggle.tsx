import React from 'react';

import { StyledThemeToggle } from './styles';

interface ThemeToggleProps {
  checked?: boolean;
  onChange?: () => void;
  id: string;
  [key: string]: any;
}

export const ThemeToggle = ({ checked, onChange, id, ...props }: ThemeToggleProps) => {
  return (
    <StyledThemeToggle darkMode={checked} {...props}>
      <label htmlFor={id}>
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
          id={id}
          name={id}
        />
      </label>
    </StyledThemeToggle>
  );
};