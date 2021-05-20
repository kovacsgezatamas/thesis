import React from 'react';

import Calendar from '../src';

export default {
  title: 'Components/Calendar',
  component: Calendar,
};

const Template = () => <Calendar />;

export const CalendarComponent = Template.bind({});
CalendarComponent.args = {
  isVisible: true,
};
