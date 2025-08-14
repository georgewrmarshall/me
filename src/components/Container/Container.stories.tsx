import React from 'react';

import { Container } from './Container';

export default {
  title: 'Components/Container',
  component: Container,
};

const Template = args => <Container {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  children: 'Container',
};
