<<<<<<< HEAD
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {
      "builder": {
        "viteConfigPath": undefined
      }
    }
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import('vite');
    const { default: react } = await import('@vitejs/plugin-react');
    
    return mergeConfig(config, {
      plugins: [
        react({
          include: /\.(js|jsx|ts|tsx)$/,
          jsxRuntime: 'automatic'
        })
      ],
      define: {
        'process.env': {},
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'global': 'globalThis',
      },
      optimizeDeps: {
        esbuildOptions: {
          jsx: 'automatic',
          loader: {
            '.js': 'jsx',
            '.ts': 'tsx'
          },
          define: {
            global: 'globalThis',
          }
        }
      }
    });
  }
};
export default config;
=======
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config: any) => {
    if (!config.module?.rules) return config;
    
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    const babelRule = config.module.rules.find((rule: any) => 
      typeof rule === 'object' && rule?.test?.toString().includes('jsx?')
    );
    
    if (babelRule && typeof babelRule === 'object' && 'exclude' in babelRule) {
      babelRule.exclude = [/node_modules\/(?!(gatsby)\/)/];
    }

    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: any) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
};
>>>>>>> 5ab26ce (chore: migrate to typescript)
