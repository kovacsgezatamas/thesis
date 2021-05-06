import React from 'react';

import Radio from '../src';

export default {
  title: 'Components/Radio',
  component: Radio,
};

const Template = (args) => <Radio {...args} />;

export const RadioComponent = Template.bind({});
RadioComponent.args = {
  value: '10',
};
