import React from 'react';

import Button from '../src';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  children: 'Thesis Button',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  isSecondary: true,
  children: 'Secondary',
};

export const Small = Template.bind({});
Small.args = {
  isSmall: true,
  children: 'Small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  isDisabled: true,
  children: 'Disabled',
};

export const DisabledSecondary = Template.bind({});
DisabledSecondary.args = {
  isSecondary: true,
  isDisabled: true,
  children: 'Disabled Secondary',
};
