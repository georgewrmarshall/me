import React from 'react';

import { ThemeToggle } from './ThemeToggle';

export default {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
};

const Template = args => <ThemeToggle {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};