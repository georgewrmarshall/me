import React from 'react';

import { NavbarToggle } from './NavbarToggle';

export default {
  title: 'Components/NavbarToggle',
  name: 'Default',
  component: NavbarToggle,
};

const Template = args => <NavbarToggle {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};
