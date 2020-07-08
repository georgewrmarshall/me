import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledMain = styled.main`
  ${(props) => css`
    opacity: ${props.loaded ? '1' : '0'};
    transition: opacity 0.5s;
    transition-delay: 0.5s;

    section {
      margin-bottom: 10rem;

      img {
        width: 100%;
        margin-bottom: 2rem;
      }

      h2 {
        margin-bottom: 1rem;
      }

      p {
        font-size: ${props.theme.type.bodySize};
        line-height: 1.7;
      }
    }
  `}
`;

StyledMain.defaultProps = {
  theme: lightTheme,
};
