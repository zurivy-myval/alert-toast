import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: { children: 'Click me', hrefLink: 'https://google.com' }
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Error: Story = { args: { variant: 'error' } };