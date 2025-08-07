import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from './Pagination';

interface PaginationProps {
  linkPrev?: string;
  linkNext?: string;
}

const meta: Meta<PaginationProps> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    linkPrev: { control: 'text' },
    linkNext: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    linkPrev: '/prev-project',
    linkNext: '/next-project',
  },
};

export const OnlyPrevious: Story = {
  args: {
    linkPrev: '/prev-project',
  },
};

export const OnlyNext: Story = {
  args: {
    linkNext: '/next-project',
  },
};