import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/components/Layout/styles';
import { lightTheme, darkTheme } from '../src/components';

declare global {
  var ___loader: {
    enqueue: () => void;
    hovering: () => void;
  };
  var __BASE_PATH__: string;
  interface Window {
    ___navigate: (pathname: string) => void;
  }
}

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// This global variable is prevents the "__BASE_PATH__ is not defined" error inside Storybook.
global.__BASE_PATH__ = '/';
// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.
window.___navigate = (pathname: string) => {
  action('NavigateTo:')(pathname);
};

const withThemeProvider = (Story: any, context: any) => {
  const theme = context.globals.theme;
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle theme={theme === 'light' ? lightTheme : darkTheme} />
      <Story {...context} />
    </ThemeProvider>
  );
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'photo',
      items: ['light', 'dark'],
    },
  },
};

export const decorators = [withThemeProvider];
