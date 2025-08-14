import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from './Box';

interface BoxProps {
  children: React.ReactNode;
  fluid?: boolean;
}

const meta: Meta<BoxProps> = {
  title: 'Components/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    fluid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<BoxProps>;

export const Default: Story = {
  args: {
    children: 'Box',
  },
};

export const Fluid: Story = {
  args: {
    children: 'Box',
    fluid: true,
  },
};
