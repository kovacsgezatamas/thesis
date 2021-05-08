import React from 'react';

import Spinner from '../src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
};

const Template = (args) => <Spinner {...args} />;

export const SpinnerComponent = Template.bind({});
SpinnerComponent.args = {};

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
};
