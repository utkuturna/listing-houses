import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { IButton } from './Button';
import { mockButtonProps } from './Button.mocks';
export default {
  title: 'ui/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Primary.args = {
  ...mockButtonProps.primaryButton,
} as IButton;

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Secondary.args = {
  ...mockButtonProps.secondaryButton,
} as IButton;

export const Outline = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Outline.args = {
  ...mockButtonProps.outlineButton,
} as IButton;
