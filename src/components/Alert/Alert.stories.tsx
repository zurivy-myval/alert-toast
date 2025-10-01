import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Alert heading',
  component: Alert,
  args: { moreLink: 'https://google.com/', title: 'Alert heading', children: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' }
};
export default meta;

type Story = StoryObj<typeof Alert>;
export const Error: Story = { args: { variant: 'error' } };