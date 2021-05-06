import React from 'react';

import Toggle from '../src';

export default {
  title: 'Components/Toggle',
  component: Toggle,
};

const Template = (args) => <Toggle {...args} />;

export const ToggleComponent = Template.bind({});
ToggleComponent.args = {
  value: '10',
};
