import React from 'react';

import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    linkPrev: { control: 'text' },
    linkNext: { control: 'text' },
  },
};

const Template = args => <Pagination {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  linkPrev: '/',
  linkNext: '/',
};
