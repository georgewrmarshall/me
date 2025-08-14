import type { Meta, StoryObj } from '@storybook/react-vite';
import { Callout } from './Callout';

interface CalloutProps {
  header?: string;
  btnLink?: string;
  btnText?: string;
}

const meta: Meta<CalloutProps> = {
  title: 'Components/Callout',
  component: Callout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    header: { control: 'text' },
    btnLink: { control: 'text' },
    btnText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<CalloutProps>;

export const Default: Story = {
  args: {
    header: 'Want to go for a skate?',
    btnLink: '/',
    btnText: 'Click Here',
  },
};
