import styled from 'styled-components';
import { space } from 'styled-system';
import { lightTheme } from '../themes';

export const StyledPagination = styled.div`
  ${space}
  display: flex;
`;

StyledPagination.defaultProps = {
  theme: lightTheme,
};
