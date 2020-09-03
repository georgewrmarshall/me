import React from 'react';

import { Navbar } from './Navbar';

export default {
  title: 'Components/Navbar',
  name: 'Default',
  component: Navbar,
};

const Template = args => <Navbar {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};