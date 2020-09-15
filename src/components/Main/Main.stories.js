import React from 'react';

import { Main } from './Main';

export default {
  title: 'Components/Main',
  component: Main,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = args => <Main {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};

DefaultStory.args = {
  children: 'Main',
};
