import styled, { css } from "styled-components";
import { lightTheme } from "../themes";

export const StyledContainer = styled.div`
  ${(props) => css`
    /* max-width: ${props.fluid ? undefined : '50rem'}; */
    margin: 0 auto;
    padding: 0 1rem;
    @media ${props.theme.minWidth.md} {
      padding: 0 4rem;
    }
  `}
`;

StyledContainer.defaultProps = {
  theme: lightTheme
}
