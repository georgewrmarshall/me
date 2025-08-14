import styled from 'styled-components';
import { lightTheme } from '../themes';

export const StyledVanbex = styled.div`
  .img-profile {
    border-radius: 100%;
    width: 200px;
    margin: 0 auto 2rem;
    display: block;
  }
`;

StyledVanbex.defaultProps = {
  theme: lightTheme
}
