import React from 'react';

import TimeSelectorPopper from '../src/TimeSelectorPopper';

export default {
  title: 'Components/TimeSelector/TimeSelectorPopper',
  component: TimeSelectorPopper,
  argTypes: {
    onChange: { action: 'TimeSelectorPopper onChange callback' },
  }
};

const Template = (args) => (
  <TimeSelectorPopper {...args} />
);

export const TimeSelectorPopperComponent = Template.bind({});
TimeSelectorPopperComponent.args = {
  formatValue: (time) => `${time.hours || '00'}:${time.minutes || '00'}`,
  value: { hours: 14, minutes: 45 },
};
