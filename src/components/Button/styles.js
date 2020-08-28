import styled, { css } from "styled-components";
import { lightTheme } from "../themes";

export const StyledButtonBase = styled.button`
  ${(props) => css`
    background: transparent;
    border: 1px solid transparent;
    border-radius: 4px;
    padding: 0;
    border-radius: 0;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${props.theme.buttonBase.fontFamily};
    font-size: ${props.theme.buttonBase.fontSize};
    text-transform: uppercase;
    letter-spacing: 0.15rem;
    cursor: pointer;
    transition: 0.3s;
    text-decoration: none;
  `}
`

export const StyledButton = styled(StyledButtonBase)`
  ${(props) => css`
    color: ${props.theme.buttonPrimary.color};
    background: ${props.theme.buttonPrimary.backgroundColor};
    padding: 0 2rem;
  `}

  &:hover, &:focus, &:active {
    ${(props) => css`
      background: ${props.theme.buttonPrimary.backgroundColorHover};
    `}
  }
`;

StyledButton.defaultProps = {
  theme: lightTheme,
};
