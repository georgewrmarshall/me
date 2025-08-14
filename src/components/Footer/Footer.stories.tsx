import React from 'react';

// Some issue with importing the Footer...
import { Footer } from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
};

const Template = args => <Footer {...args} />;

export const DefaultStory = Template.bind({});

DefaultStory.storyName = 'Default';
