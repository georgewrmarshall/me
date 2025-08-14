import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },

  argTypes: {
    fluid: {
      control: 'boolean',
      description: 'Makes the box fluid width',
    },
    as: {
      control: 'text',
      description: 'The HTML element or React component to render',
    },
  },
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Box',
    padding: 4,
    backgroundColor: '#f0f0f0',
  },
};
