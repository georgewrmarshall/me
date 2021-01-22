import React from 'react';

import { NavLink } from './NavLink';

export default {
  title: 'Components/NavLink',
  component: NavLink,
  argTypes: {
    children: { control: 'text' },
    active: { control: 'boolean' },
  },
};

const Template = args => (
  <NavLink className={args.active && 'active'} {...args}>
    {args.children}
  </NavLink>
);

export const DefaultStory = Template.bind({});

DefaultStory.args = {
  children: 'NavLink',
  active: false,
};

DefaultStory.storyName = 'Default';
