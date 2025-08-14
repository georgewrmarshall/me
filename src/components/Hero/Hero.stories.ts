import type { Meta, StoryObj } from '@storybook/react-vite';
import { Hero } from './Hero';

interface HeroProps {
  header?: string;
  description?: string;
}

const meta: Meta<HeroProps> = {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<HeroProps>;

export const Default: Story = {
  args: {
    header: 'Hero Header',
    description: 'Hero description text goes here.',
  },
};
