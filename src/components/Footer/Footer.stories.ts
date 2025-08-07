import type { Meta, StoryObj } from '@storybook/react-vite';
import { Footer } from './Footer';

const meta: Meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};