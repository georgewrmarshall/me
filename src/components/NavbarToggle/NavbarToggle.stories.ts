import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavbarToggle } from './NavbarToggle';

interface NavbarToggleProps {
  onClick?: () => void;
  open?: boolean;
}

const meta: Meta<NavbarToggleProps> = {
  title: 'Components/NavbarToggle',
  component: NavbarToggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    open: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<NavbarToggleProps>;

export const Default: Story = {
  args: {
    open: false,
  },
};

export const Open: Story = {
  args: {
    open: true,
  },
};