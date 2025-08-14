import styled from 'styled-components';
import { space } from 'styled-system';
import { lightTheme } from '../themes';

export const StyledCallout = styled.header`
  ${space};
  display: flex;
  align-items: center;
  text-align: center;
`;

StyledCallout.defaultProps = {
  theme: lightTheme,
};
