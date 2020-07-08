import { createGlobalStyle } from 'styled-components';

// Fonts
import AvenirHeavyWoff2 from '../../assets/fonts/Avenir-Heavy.woff2';
import AvenirHeavyWoff from '../../assets/fonts/Avenir-Heavy.woff';
import AvenirHeavyTtf from '../../assets/fonts/Avenir-Heavy.ttf';
import AvenirHeavySvg from '../../assets/fonts/Avenir-Heavy.svg';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Avenir 85';
    src: local('Avenir 85'), local('Avenir85'),
      url(${AvenirHeavyWoff2}) format('woff2'),
      url(${AvenirHeavyWoff}) format('woff'),
      url(${AvenirHeavyTtf}) format('truetype'),
      url(${AvenirHeavySvg}) format('svg');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  body {
    margin: 0;
    font-family:${props => props.theme.type.fontFamilyBody};
    color: ${props => props.theme.colorsTheme.bodyFontColor};
    background: ${props => props.theme.colorsTheme.bodyBackgroundColor};
    font-weight: normal;
  }
  a {
    color: inherit;
    text-decoration: line-through;
    &:visited {
      color: inherit;
    }
  }
  p {
    line-height: 1.7;
  }
`;
