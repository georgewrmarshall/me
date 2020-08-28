import styled from "styled-components";
import { lightTheme } from "../themes";

export const StyledThemeToggle = styled.div`
position: relative;
display: inline-block;

  input {
    display: none;
  }

  /* Switch */
  label {
    display: block;
    width: 40px;
    height: 20px;
    position: relative;
    
    /* Switch Rail & Knob */
    &:before,
    &:after {
      content: "";
      display: flex;
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
    }
    
    /* Switch Rail */
    &:before {
      ${(props) => props.darkMode ? `content: "🌙"` : `content: "☀️"`};
      width: 100%;
      height: 20px;
      background-color: ${(props) => props.theme.themeToggle.railOffBackgroundColor};
      border-radius: 9999em;
      transition: 0.25s;
      align-items: center;
      justify-content: ${(props) => props.darkMode ? "flex-start" : "flex-end"};
      font-size: 14px;
      line-height: 1;
      padding-left: ${(props) => props.darkMode ? ".25rem" : "0"};
      padding-right: ${(props) => props.darkMode ? "0" : ".25rem"};
    }
    
    /* Switch Knob */
    &:after {
      top: 0;
      left: 0;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.themeToggle.knobOffBackgroundColor};
      box-shadow: 0 0 2px ${(props) => props.theme.themeToggle.knobDropshadowColor};;
      transition: 0.25s;
    }
  }

  /* When input is checked */
  input:checked + label {
    /* Switch Rail */
    &:before {
      background-color: ${(props) => props.theme.themeToggle.railOnBackgroundColor};
    }
    
    /* Switch Knob */
    &:after {
      left: 24px;
      background-color: ${(props) => props.theme.themeToggle.knobOnBackgroundColor};
    }
  }
`

StyledThemeToggle.defaultProps = {
  theme: lightTheme,
};
