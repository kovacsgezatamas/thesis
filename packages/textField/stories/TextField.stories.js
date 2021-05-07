import React from 'react';

import TextField, { TextFieldAddition } from '../src';

export default {
  title: 'Components/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const TextFieldComponent = Template.bind({});
TextFieldComponent.args = {
  value: 'Text Field content.... A text here',
};

export const Small = Template.bind({});
Small.args = {
  value: 'Text Field content.... A small text here',
  isSmall: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: 'Text Field content.... A small text here',
  isDisabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  value: 'Text Field content.... A small text here',
  hasError: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  value: '',
  placeholder: 'This is a placeholder text',
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  value: 'Kovacs Geza-Tamas',
  prefix: <TextFieldAddition>name:</TextFieldAddition>,
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  value: 123,
  type: 'number',
  suffix: <TextFieldAddition>%</TextFieldAddition>,
};

export const WithPrefixAndSuffix = Template.bind({});
WithPrefixAndSuffix.args = {
  value: 123,
  prefix: <TextFieldAddition>percentage:</TextFieldAddition>,
  suffix: <TextFieldAddition>%</TextFieldAddition>,
};
WithPrefixAndSuffix.storyName = 'With suffix and prefix';
