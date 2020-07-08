import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';
import imgBackground from '../../images/shit-background.png';

export const StyledShit = styled.section`
  ${props => css`
    padding-top: 4rem;
    padding-bottom: 4rem;
    color: ${props.theme.shit.fontColor};
    background-color: ${props.theme.shit.backgroundColor};
    background-image: url(${imgBackground});

    @media ${props.theme.minWidth.md} {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    h2 {
      text-align: center;
      margin-bottom: 2rem;
    }

    p {
      text-align: center;
      margin-bottom: 2rem;

      @media ${props.theme.minWidth.md} {
        margin-bottom: 4rem;
      }
    }

    .telephone {
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>📞</text></svg>")
          16 0,
        auto;
    }

    .moneybag {
      cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>💰</text></svg>")
          16 0,
        auto;
    }

    .shit-container {
      display: flex;

      @media ${props.theme.maxWidth.md} {
        flex-direction: column;
        margin-bottom: 2rem;
      }

      @media ${props.theme.minWidth.md} {
        margin-bottom: 4rem;
      }

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 280px;

        @media ${props.theme.maxWidth.md} {
          flex-direction: column;
          padding: 2rem;
        }

        @media ${props.theme.minWidth.md} {
          max-width: 50%;
          flex: 0 0 50%;
          min-height: 80vh;
        }

        p {
          margin: 0;
          text-align: left;

          @media ${props.theme.minWidth.md} {
            padding: 0 4rem;
          }
        }

        img {
          max-width: 100%;
        }
      }

      .dark {
        background-color: ${props.theme.colorsTheme.greenDark};
        color: ${props.theme.colorsTheme.offWhite};
      }

      .light {
        background-color: ${props.theme.colorsTheme.offWhite};
        color: ${props.theme.colorsTheme.greenDark};
      }

      + .shit-container {
        @media ${props.theme.maxWidth.md} {
          flex-direction: column-reverse;
        }
      }
    }
  `}
`;

StyledShit.defaultProps = {
  theme: lightTheme,
};
