import React from 'react';

import { Hero } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
    argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
  },
};

const Template = args => <Hero {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};

DefaultStory.args = {
  header: 'Header',
  description: 'Description',
};

