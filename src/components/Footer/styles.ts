import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledFooter = styled.div`
  ${props => css`
    padding: ${`${props.theme.space[5]}px 0`};
    background: ${props.theme.footer.backgroundColor};
    color: ${props.theme.footer.color};

    nav {
      margin: ${`0 0 ${props.theme.space[4]}px`};

      + ul {
        width: 100%;

        border-top: 1px solid ${props.theme.footer.borderColor};
        border-bottom: 1px solid ${props.theme.footer.borderColor};
        padding: ${`${props.theme.space[4]}px 0`};

        @media ${props.theme.minWidth.md} {
          justify-content: space-between;
        }

        li {
          padding: ${`${props.theme.space[2]}px`};

          &:first-child {
            max-width: 100%;
            flex: 0 0 100%;
            text-align: center;
            margin-bottom: ${`${props.theme.space[3]}px`};
          }
        }
      }
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      list-style: none;
      padding: 0;
      margin: ${`0 0 ${props.theme.space[4]}px`};
    }

    li {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${`${props.theme.space[2]}px`};

      @media ${props.theme.minWidth.md} {
        padding: 0 ${`${props.theme.space[3]}px`};
        margin-bottom: 0;
      }
    }

    svg {
      path {
        fill: ${props.theme.footer.logoColor};
      }
    }

    p {
      text-align: center;
      margin-bottom: 0;
    }
  `}
`;

StyledFooter.defaultProps = {
  theme: lightTheme,
};
