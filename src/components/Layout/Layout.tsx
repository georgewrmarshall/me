/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';

// Themes
import { lightTheme, darkTheme } from '../themes';

// Styles
import { GlobalStyle } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const darkMode = useDarkMode(false);
  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <GlobalStyle theme={darkMode.value ? darkTheme : lightTheme} />
      {children}
    </ThemeProvider>
  );
};

// Layout.defaultProps = {
//   theme: lightTheme
// }
