import type { Meta, StoryObj } from '@storybook/react-vite';
import { Main } from './Main';

interface MainProps {
  children: React.ReactNode;
}

const meta: Meta<MainProps> = {
  title: 'Components/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<MainProps>;

export const Default: Story = {
  args: {
    children: 'Main content',
  },
};
