import React from 'react';

import { Box } from './Box';

export default {
  title: 'Components/Box',
  component: Box,
};

const Template = args => <Box {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  children: 'Box',
};
