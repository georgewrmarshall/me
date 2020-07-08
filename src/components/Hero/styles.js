import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledHero = styled.header`
  ${props => css`
    display: flex;
    justify-content: center;
    height: 100vh;
    background-color: ${props.theme.hero.backgroundColor};
    padding: 0 16px;
    position: relative;

    @media ${props.theme.maxWidth.md} {
      flex-direction: column-reverse;
      position: relative;
    }

    @media ${props.theme.minWidth.md} {
      padding: 0 16%;
    }

    canvas {
      z-index: 2;
      position: absolute;
      pointer-events: none;
      top: 0px;
      left: 0px;
      bottom: 0px;
      right: 0px;
      width: 100vw;
      height: 100vh;
    }

    > div {
      padding-top: 4rem;

      &:first-child {
        @media ${props.theme.minWidth.md} {
          position: relative;
          max-width: calc(100% - 408px);
          flex: 0 0 calc(100% - 408px);
        }

        @media ${props.theme.minWidth.xl} {
          max-width: 35%;
          flex: 0 0 35%;
        }
      }

      + div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media ${props.theme.minWidth.md} {
          max-width: 408px;
          flex: 0 0 408px;
          margin-left: 3rem;
        }
      }
    }

    h1 {
      color: ${props.theme.colorsTheme.primary};
      display: flex;
      flex-direction: column;
      margin: 0;
      line-height: 1.1;

      > span:first-child {
        margin-bottom: 1em;
      }

      > span:last-child {
        position: relative;
      }

      button {
        display: inline;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        z-index: 1;
        background: none;
        border: none;
        padding: none;
        color: inherit;
        font-family: inherit;
        font-size: inherit;
        text-transform: inherit;
        min-width: 0;
        letter-spacing: inherit;
        padding: 0;
        margin: 0;
        outline: none;
        transition: 0.3s;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🥳</text></svg>")
            16 0,
          auto;

        &::before {
          content: '';
          transition: 0.1s;
          position: absolute;
          width: 100%;
          left: 0;
          bottom: 0;
          height: 2px;
          background-color: ${props.theme.colorsTheme.bodyFontColor};
          z-index: 0;
        }
        &:hover {
          color: ${props.theme.colorsTheme.primaryDark};
          &::before {
            height: 8px;
          }
        }
      }
    }

    p {
      span {
        @media ${props.theme.maxWidth.md} {
          position: relative;
          background-color: ${props.theme.colorsTheme.primary};
          padding: 0.25rem;
        }
      }
    }

    .profile {
      position: absolute;
      bottom: 0;
      right: 16px;
      width: 220px;

      @media ${props.theme.minWidth.xs} {
        width: 300px;
      }

      @media ${props.theme.minWidth.md} {
        left: 50%;
        right: unset;
        transform: translateX(-50%);
      }

      @media ${props.theme.minWidth.xl} {
        width: 100%;
      }
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      text-transform: uppercase;
      font-family: ${props.theme.type.fontFamilyNav};
      font-weight: 700;
      font-size: 0.875rem;
      letter-spacing: 0.15rem;
      text-decoration: none;
      line-height: 1.7;
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🍆</text></svg>")
          16 0,
        auto;

      @media ${props.theme.maxWidth.md} {
        bottom: 0;
        width: 280px;
        letter-spacing: 0.085rem;
        span {
          width: 100%;
          position: relative;
          background-color: ${props.theme.colorsTheme.primary};
          padding: 0.25rem;
        }

        br {
          display: none;
        }
      }

      @media ${props.theme.minWidth.md} {
        &:hover {
          img {
            transform: translate(-50%, 10px);
          }
        }
      }

      img {
        width: 20px;
        display: block;
        transition: 0.3s;

        @media ${props.theme.maxWidth.md} {
          padding: 0.25rem;
          background-color: ${props.theme.colorsTheme.greenDark};
        }
      }
    }
  `}
`;

StyledHero.defaultProps = {
  theme: lightTheme,
};
