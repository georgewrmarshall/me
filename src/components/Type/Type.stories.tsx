import type { Meta, StoryObj } from '@storybook/react-vite';
import { Body } from './Body';
import { Display } from './Display';
import { Headline } from './Headline';
import { Title } from './Title';
import { Info } from './Info';

interface TypographyProps {
  children?: React.ReactNode;
}

const meta: Meta<TypographyProps> = {
  title: 'Components/Typography',
  component: Body,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<TypographyProps>;

export const TypeRamp: Story = {
  render: (args) => (
    <>
      <Display mb={4}>
        {args.children || `Display D/4rem(64px) M/3rem(48px)`}
      </Display>
      <Headline mb={4}>
        {args.children || `Headline D/2rem(32px) M/1.5rem(24px)`}
      </Headline>
      <Title mb={4}>
        {args.children || `Title D/1.5rem(24px) M/1.5rem(24px)`}
      </Title>
      <Body mb={4}>
        {args.children || `Body D/1.25rem(20px) M/1.25rem(20px)`}
      </Body>
      <Info mb={4}>
        {args.children || `Info D/0.875rem(14px) M/0.875rem(14px)`}
      </Info>
    </>
  ),
};