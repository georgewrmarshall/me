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

const Template = args => <NavLink className={args.active && 'active'} {...args}>{args.children}</NavLink>;

export const Primary = Template.bind({});

Primary.args = {
  children: 'NavLink',
  active: false
};