import React from 'react';

import { Container } from './Container';

export default {
  title: 'Components/Container',
  name: 'Default',
  component: Container,
};

const Template = args => <Container {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};

DefaultStory.args = {
  children: 'Container',
};
