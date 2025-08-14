module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config: any) => {
    if (!config.module?.rules) return config;

    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    const babelRule = config.module.rules.find(
      (rule: any) =>
        typeof rule === 'object' && rule?.test?.toString().includes('jsx?'),
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
      propFilter: (prop: any) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
};
