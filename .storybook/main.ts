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