import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

interface StyledMainProps {
  loaded?: boolean;
}

export const StyledMain = styled.main<StyledMainProps>`
  ${(props) => css`
    opacity: ${props.loaded ? '1' : '0'};
    transition: opacity 0.5s;
    transition-delay: 0.5s;
    margin-bottom: 10rem;
  `}
`;

StyledMain.defaultProps = {
  theme: lightTheme,
};
