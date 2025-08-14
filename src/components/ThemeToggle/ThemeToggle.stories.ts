import type { Meta, StoryObj } from '@storybook/react-vite';
import { ThemeToggle } from './ThemeToggle';

interface ThemeToggleProps {
  checked?: boolean;
  onChange?: () => void;
  id: string;
}

const meta: Meta<ThemeToggleProps> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: { control: 'boolean' },
    onChange: { action: 'changed' },
    id: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<ThemeToggleProps>;

export const Default: Story = {
  args: {
    checked: false,
    id: 'theme-toggle-story',
  },
};

export const Checked: Story = {
  args: {
    checked: true,
    id: 'theme-toggle-story-checked',
  },
};
