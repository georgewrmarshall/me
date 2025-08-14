import React from 'react';

// Styles
import { StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  to?: string;
  [key: string]: any;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type="button"
      {...props}
    >
      {children}
    </StyledButton>
  );
};
