import styled from 'styled-components';
import { space, flexbox, grid, layout, border } from 'styled-system';
import { lightTheme } from '../themes';

export const StyledBox = styled.div`
  ${space};
  ${flexbox};
  ${grid};
  ${layout};
  ${border};
`;

StyledBox.defaultProps = {
  theme: lightTheme,
};
