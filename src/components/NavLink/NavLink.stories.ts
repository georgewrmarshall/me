import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavLink } from './NavLink';

interface NavLinkProps {
  children: React.ReactNode;
  to?: string;
}

const meta: Meta<NavLinkProps> = {
  title: 'Components/NavLink',
  component: NavLink,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    to: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<NavLinkProps>;

export const Default: Story = {
  args: {
    children: 'Navigation Link',
    to: '/',
  },
};
