import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledNavbar = styled.nav`
  /* display: flex; */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  height: 64px;
  /* border-bottom: 1px solid ${(props) => props.theme.navbar.borderColor}; */

  ${(props) => css`
    @media ${props.theme.minWidth.md} {
      height: 120px;
    }
  `}

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .brand {
    position: relative;

    svg {
      path {
        transition: 0.3s;
        fill: ${(props) => props.theme.navbar.brandColor};
      }
    }
    &:hover, &:focus, :active {
      path {
        fill: ${(props) => props.theme.navbar.brandColorHover};
      } 
    }
  }

  .btn-menu-toggle {
    display: none;
    cursor: pointer;
    order: 1;

    ${(props) => css`
      @media ${props.theme.maxWidth.md} {
        display: block;
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
            props.show ? 'transparent' : props.theme.navbar.menuIconColor};
          transition: background-color 0.1s;
          position: relative;
          height: 3px;
          border-radius: 3px;
          width: 100%;

          &::before,
          &::after {
            background-color: ${(props) => props.theme.navbar.menuIconColor};
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            right: 0;
            border-radius: 3px;
            transition: transform 0.3s, top 0.3s, background-color 0s;
          }

          &::before {
            ${(props) =>
              props.show
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
              props.show
                ? `
                  top: 0;
                  transform: rotate(225deg);
                `
                : `
                  top: 10px;
                `};
          }
        }
      }
    `}
  }

  .menu {
    ${(props) => css`
      @media ${props.theme.maxWidth.md} {
        position: fixed;
        top: ${props.show ? 0 : '1.5rem'};
        right: ${props.show ? 0 : '1.5rem'};
        transform: ${props.show ? 'scale(1)' : 'scale(0)'};
        transform-origin: 100% 0%;
        width: ${props.show ? '100%' : 0};
        height: ${props.show ? '100%' : 0};
        opacity: ${props.show ? 1 : 0};
        transition: 0.3s;
        transition-delay: ${!props.show ? '0.025s' : undefined};
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props.show ? props.theme.navbar.menuBackgroundColor : 'transparent'};
      }
    `}

    ${(props) => css`
      @media ${props.theme.minWidth.md} {
        order: 1;
      }
    `}
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;

      ${(props) => css`
        @media ${props.theme.maxWidth.md} {
          flex-direction: column;
        }
        @media ${props.theme.minWidth.md} {
          margin-right: -1rem;
        }
      `}
    }

    li {
      display: flex;
      align-items: center;

      ${(props) => css`
        @media ${props.theme.maxWidth.md} {
          justify-content: center;
          padding: 1rem;
          text-align: center;
          opacity: ${props.show ? 1 : 0};
          transition: 0.1s;
          transition-delay: ${props.show ? '0.2s' : undefined};
        }
        @media ${props.theme.minWidth.md} {
          padding: 0 1rem;
        }
      `}
    }
  }
`;

StyledNavbar.defaultProps = {
  theme: lightTheme,
};
