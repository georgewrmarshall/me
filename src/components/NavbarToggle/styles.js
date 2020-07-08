import styled from "styled-components";
import { lightTheme } from "../themes";

export const StyledNavbarToggle = styled.button`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0;

  .icon {
    display: flex;
    align-items: center;
    height: 24px;
    width: 24px;
  }

  .icon__bar {
    background-color: ${(props) =>
      props.open ? "transparent" : props.theme.navbar.menuIconColor};
    transition: background-color 0.1s;
    position: relative;
    height: 3px;
    border-radius: 3px;
    width: 100%;

    &::before,
    &::after {
      background-color: ${(props) => props.theme.navbar.menuIconColor};
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      right: 0;
      border-radius: 3px;
      transition: transform 0.3s, top 0.3s, background-color 0s;
    }

    &::before {
      ${(props) =>
        props.open
          ? `
              top: 0;
              transform: rotate(135deg);
            `
          : `
              top: -10px;
            `};
    }

    &::after {
      ${(props) =>
        props.open
          ? `
              top: 0;
              transform: rotate(225deg);
            `
          : `
              top: 10px;
            `};
    }
  }
`;

StyledNavbarToggle.defaultProps = {
  theme: lightTheme,
};
