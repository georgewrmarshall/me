import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030;
  height: 64px;
  transition: all 0.3s;
  border: 1px solid transparent;

  ${(props) => css`
    background-color: ${props.section !== 'homeless' ? props.theme.navbar.backgroundColor : 'transparent'};
    /* background-color: ${props.section === 'shitIveDone' ? props.theme.colorsTheme.primary : undefined};
    background-color: ${props.section === 'inflatedBullshit' ? props.theme.colorsTheme.offWhite : undefined};
    background-color: ${props.section === 'dontContactMe' ? props.theme.colorsTheme.offWhite : undefined}; */
    border-color: ${props.section !== 'homeless' ? props.theme.navbar.borderColor : 'transparent'};

    @media ${props.theme.minWidth.lg} {
      height:  ${props.section === 'homeless' ? `136px` : `80px`};
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

      + svg {
        position: absolute;
        left: -2px;
        top: -2px;

        path {
          fill: ${(props) => props.theme.navbar.brandColorHover};
        }
      }
    }
    &:hover, &:focus, :active {
      svg {
        path {
          transition: 0.3s;
          fill: ${(props) => props.theme.navbar.brandColorHover};
        }

      + svg {
        position: absolute;
        left: -2px;
        top: -2px;

        path {
          fill: ${(props) => props.theme.navbar.brandColor};
        }
      }
    }
    }
  }

  .btn-menu-toggle {
    display: none;
    cursor: pointer;
    order: 1;

    ${(props) => css`
      @media ${props.theme.maxWidth.lg} {
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
      @media ${props.theme.maxWidth.lg} {
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
      @media ${props.theme.minWidth.lg} {
        order: 1;
      }
    `}
    
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;

      ${(props) => css`
        @media ${props.theme.maxWidth.lg} {
          flex-direction: column;
        }
        @media ${props.theme.minWidth.lg} {
          margin-right: -1rem;
        }
      `}
    }

    li {
      display: flex;
      align-items: center;

      ${(props) => css`
        @media ${props.theme.maxWidth.lg} {
          justify-content: center;
          padding: 1rem;
          text-align: center;
          opacity: ${props.show ? 1 : 0};
          transition: 0.1s;
          transition-delay: ${props.show ? '0.2s' : undefined};
        }
        @media ${props.theme.minWidth.lg} {
          padding: 0 1rem;
        }
      `}
    }
  }
`;

StyledNavbar.defaultProps = {
  theme: lightTheme,
};
