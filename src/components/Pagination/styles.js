import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { lightTheme } from '../themes';

export const StyledPagination = styled.div`
  ${space}
  ${props => css`
    display: flex;
    /* justify-content: space-between; */

    a span:nth-child(2) {
      display: none;
    }

    @media ${props.theme.minWidth.xs} {
      a {
        span:nth-child(1) {
          display: none;
        }
        span:nth-child(2) {
          display: block;
        }
      }
    }
  `}
`;

StyledPagination.defaultProps = {
  theme: lightTheme,
};
