import React from 'react';

import Textarea from '../src';

export default {
  title: 'Components/Textarea',
  component: Textarea,
};

const Template = (args) => <Textarea rows={5} cols={50} {...args} />;

export const TextareaComponent = Template.bind({});
TextareaComponent.args = {
  value: 'Text Field content.... A text here',
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

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  value: 'Text Field content.... A small text here',
  isReadOnly: true,
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  value: '',
  placeholder: 'This is a placeholder text',
};

export const Small = Template.bind({});
Small.args = {
  value: 'Small value',
  cols: 30,
  rows: 2,
};

export const NotResizable = Template.bind({});
NotResizable.args = {
  value: 'Not resizable value',
  resize: 'none',
};
