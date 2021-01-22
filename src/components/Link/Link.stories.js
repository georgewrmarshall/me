import React from 'react';

import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: { control: 'text' },
  },
};

const Template = args => <Link {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';

DefaultStory.args = {
  children: 'link',
};
