import React from 'react';

import Toggle from '../src';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const ToggleComponent = Template.bind({});
ToggleComponent.args = {
  isChecked: false,
  isDisabled: false,
  hasError: false,
  value: 'toggleValue',
  labelValue: 'Toggle Label',
};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  isDisabled: false,
  hasError: false,
  value: 'toggleValue',
  labelValue: 'Checked Toggle Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isChecked: false,
  isDisabled: true,
  hasError: false,
  value: 'toggleValue',
  labelValue: 'Disabled Toggle Label',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  isChecked: true,
  isDisabled: true,
  value: 'toggleValue',
  labelValue: 'Checked + Disabled Toggle Label',
};

export const WithError = Template.bind({});
WithError.args = {
  isChecked: false,
  hasError: true,
  value: 'toggleValue',
  labelValue: 'Error Toggle Label',
};

export const CheckedWithError = Template.bind({});
CheckedWithError.args = {
  isChecked: true,
  hasError: true,
  value: 'toggleValue',
  labelValue: 'Checked + Error Toggle Label',
};
