import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledBullshit = styled.section`
  ${props => css`
    padding-top: 4rem;
    padding-bottom: 4rem;
    color: ${props.theme.bullshit.fontColor};
    background-color: ${props.theme.bullshit.backgroundColor};
    position: relative;

    @media ${props.theme.minWidth.md} {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    h2 {
      margin-bottom: 2rem;
    }

    p {
      margin-bottom: 4rem;
    }

    .bullshit-container {
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

        @media ${props.theme.minWidth.md} {
          max-width: 50%;
          flex: 0 0 50%;
          justify-content: center;
        }
      }
    }

    .bullshit-image {
      background-color: ${props.theme.colorsTheme.primary};

      @media ${props.theme.maxWidth.md} {
        height: 300px;
        position: relative;
      }

      img {
        position: absolute;
        bottom: 0;

        @media ${props.theme.maxWidth.md} {
          left: -16px;
          max-width: 100%;
        }

        @media ${props.theme.minWidth.md} {
          left: 0;
        }
      }
    }

    .bullshit-text {
      @media ${props.theme.maxWidth.md} {
        padding-top: 2rem;
      }

      div {
        @media ${props.theme.minWidth.md} {
          padding: 0 4rem;
        }
      }

      p {
        margin: 0;
        margin-bottom: 2rem;
      }
    }
  `}
`;

StyledBullshit.defaultProps = {
  theme: lightTheme,
};
