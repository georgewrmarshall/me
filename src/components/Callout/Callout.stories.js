import React from 'react';

import { Callout } from './Callout';

export default {
  title: 'Components/Callout',
  component: Callout,
    argTypes: {
    header: { control: 'text' },
    btnLink: { control: 'text' },
    btnText: { control: 'text' },
  },
};

const Template = args => <Callout {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.story = {
  name: 'Default',
};

DefaultStory.args = {
  header: 'Want to go for a skate?',
  btnLink: '/',
  btnText: 'Click Here',
};

