import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from './Link';

interface LinkProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const meta: Meta<LinkProps> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<LinkProps>;

export const Default: Story = {
  args: {
    children: 'Link Text',
  },
};
