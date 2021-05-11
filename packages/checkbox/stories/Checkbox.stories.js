import React from 'react';

import Checkbox from '../src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  isChecked: false,
  isIndeterminate: false,
  isDisabled: false,
  hasError: false,
  value: 'checkboxValue',
  labelValue: 'Checkbox Label',
};

export const Checked = Template.bind({});
Checked.args = {
  isChecked: true,
  isIndeterminate: false,
  isDisabled: false,
  value: 'checkboxValue',
  labelValue: 'Checked Checkbox Label',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  isChecked: false,
  isIndeterminate: true,
  isDisabled: false,
  value: 'checkboxValue',
  labelValue: 'Indeterminate Checkbox Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isChecked: false,
  isIndeterminate: false,
  isDisabled: true,
  value: 'checkboxValue',
  labelValue: 'Disabled Checkbox Label',
};

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = {
  isChecked: true,
  isIndeterminate: false,
  isDisabled: true,
  value: 'checkboxValue',
  labelValue: 'Checked + Disabled Checkbox Label',
};

export const IndeterminateDisabled = Template.bind({});
IndeterminateDisabled.args = {
  isChecked: false,
  isIndeterminate: true,
  isDisabled: true,
  value: 'checkboxValue',
  labelValue: 'Indeterminate + Disabled Checkbox Label',
};

export const WithError = Template.bind({});
WithError.args = {
  isChecked: false,
  hasError: true,
  value: 'checkboxValue',
  labelValue: 'Error Checkbox Label',
};

export const CheckedWithError = Template.bind({});
CheckedWithError.args = {
  isChecked: true,
  hasError: true,
  value: 'checkboxValue',
  labelValue: 'Checked + Error Checkbox Label',
};
