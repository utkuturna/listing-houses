import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainLayout, { IMainLayout } from './MainLayout';
import { mockMainLayoutProps } from './MainLayout.mocks';

export default {
  title: 'layouts/MainLayout',
  component: MainLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MainLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockMainLayoutProps.base,
} as IMainLayout;
