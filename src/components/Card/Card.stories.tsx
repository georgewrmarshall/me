import React from 'react';

import { Card } from './Card';

import placeholderImg from '../../assets/images/placholder.jpg';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
    info: { control: 'text' },
  },
};

const Template = args => <Card {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  header: 'Header',
  info: 'info',
  description: 'This is the description of the card',
  imgSrc: placeholderImg,
  to: '#',
};
