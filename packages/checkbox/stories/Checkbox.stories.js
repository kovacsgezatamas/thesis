import React from 'react';

import Checkbox from '../src';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;

export const CheckboxComponent = Template.bind({});
CheckboxComponent.args = {
  value: '10',
};
