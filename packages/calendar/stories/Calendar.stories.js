import React from 'react';

import Calendar from '../src';

export default {
  title: 'Components/Calendar',
  component: Calendar,
  argTypes: {
    onDateChange: { action: 'Calendar onDateChange callback' },
    onDateRangeChange: { action: 'Calendar onDateRangeChange callback' },
   },
};

const Template = (args) => <Calendar {...args} />;

export const CalendarComponent = Template.bind({});
CalendarComponent.args = {
  date: new Date(),
  mode: 'DATE',
  monthsNumber: 2,
};
