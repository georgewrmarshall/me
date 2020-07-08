import styled, { css } from "styled-components";
import { lightTheme } from "../themes";

export const StyledFooter = styled.div`
  padding: 4rem 0;

  ${(props) => css`
    background: ${props.theme.footer.backgroundColor};
    color: ${props.theme.footer.color};
  `}

  nav {
    margin:0 -0.5rem 2rem -0.5rem;

    ${(props) => css`
      @media ${props.theme.minWidth.md} {
        margin: 0 0 2rem;
      }
    `}

    + ul {
      width: 100%;
      ${(props) => css`
        border-top: 1px solid ${props.theme.footer.borderColor};
        border-bottom: 1px solid ${props.theme.footer.borderColor};
        padding: 3rem 0;

        @media ${props.theme.minWidth.md} {
          justify-content: space-between;
        }

        li {
          padding: .75rem;

          &:first-child {
            max-width: 100%;
            flex: 0 0 100%;
            text-align: center;
            margin-bottom: 1rem;
          }
        }
      `}
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
  }

  li {
    padding: 0 0.25rem;
    
    ${(props) => css`
      @media ${props.theme.minWidth.xs} {
        padding: 0 1rem;
      }
      @media ${props.theme.minWidth.md} {
        padding: 0 1rem;
        margin-bottom: 0;
      }
    `}
  }

  svg {
    path {
      fill: ${(props) => props.theme.footer.logoColor};
    }
  }
`;

StyledFooter.defaultProps = {
  theme: lightTheme
}
