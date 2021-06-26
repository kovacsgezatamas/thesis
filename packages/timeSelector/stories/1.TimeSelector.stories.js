import React from 'react';

import TimeSelector from '../src';
import TimeSelectorHelper from './styled/TimeSelectorHelper';

export default {
  title: 'Components/TimeSelector',
  component: TimeSelector,
  argTypes: {
    onChange: { action: 'TimeSelector onChange callback' },
  }
};

const Template = (args) => (
  <TimeSelectorHelper>
    <TimeSelector {...args} />
  </TimeSelectorHelper>
);

export const Component = Template.bind({});
Component.args = {
  placeholder: 'Time Selector'
};

export const SelectedValue = Template.bind({});
SelectedValue.args = {
  value: { hours: 14, minutes: 45 },
};

export const HasError = Template.bind({});
HasError.args = {
  value: { hours: 19, minutes: 15 },
  hasError: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: { hours: 19, minutes: 15 },
  isDisabled: true,
};

export const CustomTimeFormat = Template.bind({});
CustomTimeFormat.args = {
  value: { hours: 21, minutes: 35 },
  timeFormat: 'hh:mm A',
};
