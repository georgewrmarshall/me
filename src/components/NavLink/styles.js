import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { lightTheme } from '../themes';

export const StyledNavLink = styled(Link).attrs(props => ({
  activeClassName: 'active',
}))`
  color: ${props => props.theme.navLink.color};
  display: inline-block;
  text-decoration: none;
  transition: 0.15s;
  position: relative;
  text-transform: uppercase;
  font-family: ${props => props.theme.type.fontFamilyNav};
  font-weight: 700;
  font-size: 0.875rem;
  letter-spacing: 0.15rem;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.navLink.colorHover};
  }

  &::after {
    ${props => css`
      content: '';
      position: absolute;
      bottom: -3px;
      transition: 0.15s;
      left: 0;
      width: 100%;
      border-bottom: 3px solid ${props.theme.navLink.borderColor};
      transform: translate(0%, 200%);
      opacity: 0;
    `}
  }
  &.active&::after {
    content: '';
    transform: translate(0%, 0%);
    opacity: 1;
  }
`;

StyledNavLink.defaultProps = {
  theme: lightTheme,
};
