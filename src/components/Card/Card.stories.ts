import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from './Card';
import placeholderImg from '../../assets/images/placholder.jpg';

interface CardProps {
  header?: string;
  info?: string;
  description?: string;
  imgSrc?: string;
  link?: string;
  to?: string; // Additional prop that might be passed through
}

const meta: Meta<CardProps> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    header: { control: 'text' },
    description: { control: 'text' },
    info: { control: 'text' },
    imgSrc: { control: 'text' },
    link: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    header: 'Header',
    info: 'info',
    description: 'This is the description of the card',
    imgSrc: placeholderImg,
    to: '#',
  },
};