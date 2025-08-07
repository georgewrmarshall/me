import type { Meta, StoryObj } from '@storybook/react-vite';
import { Navbar } from './Navbar';

const meta: Meta = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {};