import React from 'react';
import addDays from 'date-fns/addDays';

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

export const Component = Template.bind({});
Component.args = {
  date: new Date(),
  dateRange: {
    start: new Date(),
    end: addDays(new Date(), 4),
  },
  mode: 'DATE',
  monthsNumber: 2,
};


export const SelectedDateRange = Template.bind({});
SelectedDateRange.args = {
  dateRange: {
    start: addDays(new Date(), -3),
    end: addDays(new Date(), 4),
  },
  mode: 'DATE_RANGE',
  monthsNumber: 2,
};
