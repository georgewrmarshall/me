import styled, { css } from "styled-components";
import { lightTheme } from "../themes";
import { Link } from 'gatsby';

export const StyledLinkBase = styled(Link)`  
  ${(props) => css`
    display: inline-flex;
    align-items: center;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    font-family: ${props.theme.type.fontFamilyNav};
    font-size: ${props.theme.linkBase.fontSize};
    text-transform: uppercase;
    letter-spacing: 0.15rem;
  `}
`

StyledLinkBase.defaultProps = {
  theme: lightTheme,
}

export const StyledLinkPrimary = styled(StyledLinkBase)`
  ${(props) => css`
    color: ${props.theme.linkPrimary.color};
    border-color: ${props.theme.linkPrimary.borderColor};

    &:hover, &:focus, &:active {
      color: ${props.theme.linkPrimary.colorHover};
      border-color: ${props.theme.linkPrimary.borderColorHover};
    }
  `}
`;

StyledLinkPrimary.defaultProps = {
  theme: lightTheme,
};
