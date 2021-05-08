import React from 'react';

import Loader from '../src';

export default {
  title: 'Components/Loader',
  component: Loader,
};

const Template = (args) => <Loader {...args} />;

export const LoaderComponent = Template.bind({});
LoaderComponent.args = {
  progress: 40,
};

export const Small = Template.bind({});
Small.args = {
  progress: 80,
  isSmall: true,
};

export const NotStarted = Template.bind({});
NotStarted.args = {
  progress: 0,
};

export const Finished = Template.bind({});
Finished.args = {
  progress: 100,
};
