import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

interface StyledHeroProps {
  loaded?: boolean;
}

export const StyledHero = styled.header<StyledHeroProps>`
  ${props => css`
    min-height: 420px;
    height: calc(100vh - 8rem);
    display: flex;
    align-items: center;

    h1 {
      text-transform: uppercase;
      margin-bottom: 1rem;
      overflow: hidden;

      @media ${props.theme.minWidth.md} {
        margin-bottom: 2rem;
      }

      span {
        display: block;
        transform: ${props.loaded ? 'translateY(0)' : 'translateY(100%)'};
        opacity: ${props.loaded ? '1' : '0'};
        transition: transform 0.3s, opacity 0.3s;
      }
    }

    p {
      margin-bottom: 2rem;
      overflow: hidden;

      span {
        display: block;
        transform: ${props.loaded ? 'translateY(0)' : 'translateY(100%)'};
        opacity: ${props.loaded ? '1' : '0'};
        transition: transform 0.5s, opacity 0.5s;
        transition-delay: 0.1s;
      }
    }
  `}
`;

StyledHero.defaultProps = {
  theme: lightTheme,
};
