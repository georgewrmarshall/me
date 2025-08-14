import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from './Container';

interface ContainerProps {
  children: React.ReactNode;
  fluid?: boolean;
}

const meta: Meta<ContainerProps> = {
  title: 'Components/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
    fluid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<ContainerProps>;

export const Default: Story = {
  args: {
    children: 'Container content',
  },
};

export const Fluid: Story = {
  args: {
    children: 'Container content',
    fluid: true,
  },
};
