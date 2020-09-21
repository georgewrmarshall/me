import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledContainer = styled.div`
  ${props => css`
    margin: 0 auto;
    padding: ${`0 ${props.theme.space[3]}px`};
    max-width: ${props.fluid ? undefined : `0 0 calc(100% - ${props.theme.space[4]}px)`};
    flex: ${props.fluid ? undefined : `0 0 calc(100% - ${props.theme.space[4]}px)`};

    @media ${props.theme.minWidth.md} {
      padding: ${`0 ${props.theme.space[5]}px`};
      max-width: ${props.fluid ? undefined : `calc(54rem - ${props.theme.space[6]}px)`};
      flex: ${props.fluid ? undefined : `0 0 calc(54rem - ${props.theme.space[6]}px)`};
    }
  `}
`;

StyledContainer.defaultProps = {
  theme: lightTheme,
};
