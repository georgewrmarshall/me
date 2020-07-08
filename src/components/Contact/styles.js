import styled, { css } from 'styled-components';
import { lightTheme } from '../themes';

export const StyledContact = styled.section`
  ${props => css`
    padding-top: 4rem;
    padding-bottom: 4rem;

    background-color: ${props.theme.contact.backgroundColor};
    color: ${props.theme.contact.fontColor};
    text-align: center;

    @media ${props.theme.minWidth.md} {
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

  `}
`;

StyledContact.defaultProps = {
  theme: lightTheme,
};
