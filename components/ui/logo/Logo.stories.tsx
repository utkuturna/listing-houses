import { ComponentMeta, ComponentStory } from '@storybook/react';
import Logo, { ILogo } from './Logo';
import { mockLogoProps } from './Logo.mocks';
export default {
  title: 'ui/Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Logo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Default.args = {
  ...mockLogoProps.logo,
} as ILogo;
