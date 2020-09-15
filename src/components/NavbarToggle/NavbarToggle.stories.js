import React from 'react';

import { NavbarToggle } from './NavbarToggle';

export default {
  title: 'Components/NavbarToggle',
  component: NavbarToggle,
};

const Template = args => <NavbarToggle {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};
