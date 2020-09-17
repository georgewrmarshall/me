import styled, { css } from 'styled-components';
import { Link as GLink } from 'gatsby';
import { space } from 'styled-system';
import { lightTheme } from '../themes';

export const StyledCard = styled(GLink)`
  ${space};
  ${props => css`
    display: block;
    cursor: pointer;
    text-decoration: none;
    color: ${props.theme.card.color};
  `}
`;

StyledCard.defaultProps = {
  theme: lightTheme,
};
