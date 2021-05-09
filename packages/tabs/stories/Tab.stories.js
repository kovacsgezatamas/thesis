import React from 'react';

import { Tab } from '../src';

import { SAMPLE_SHORT_TEXT } from '../../../.storybook/constants';

export default {
  title: 'Components/Tabs/Tab',
  component: Tab,
};

const Template = (args) => <Tab {...args} />;

export const TabComponent = Template.bind({});
TabComponent.args = {
  children: 'My Tab',
  isSelected: false,
  isDisabled: false,
  isMultiline: false,
};

export const Selected = Template.bind({});
Selected.args = {
  children: 'Selected Tab',
  isSelected: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Tab',
  isDisabled: true,
};

export const Multiline = Template.bind({});
Multiline.args = {
  children: `Multiline Tab: ${SAMPLE_SHORT_TEXT}`,
  isMultiline: true,
  isSelected: true,
};
