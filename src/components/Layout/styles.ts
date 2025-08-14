import { css } from 'styled-components';
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

  ${props => css`
    body {
      font-family: ${props.theme.type.fontFamilyBody};
      margin: 0;
      color: ${props.theme.colorsTheme.bodyFontColor};
      background: ${props.theme.colorsTheme.bodyBackgroundColor};
      transition: 0.3s;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${props.theme.type.fontFamilyHeader};
      font-weight: 900;
      margin: 0;
      color: ${props.theme.colorsTheme.headerFontColor};
    }

    p {
      margin-top: 0;
      line-height: 1.7;
    }

    li,
    p {
      a {
        text-decoration: none;
        display: inline-block;
        color: ${props.theme.colorsTheme.bodyFontColor};
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: 10%;
          left: 0;
          width: 100%;
          border-bottom: 2px solid ${props.theme.colorsTheme.primary};
        }

        &:hover,
        &:active,
        &:focus {
          color: ${props.theme.colorsTheme.primary};
        }
      }
    }
  `}
`;
