import React from 'react';

import TextField from '../src';

export default {
  title: 'Components/TextField',
  component: TextField,
};

const Template = (args) => <TextField {...args} />;

export const TextFieldComponent = Template.bind({});
TextFieldComponent.args = {
  value: '10',
};
