import React from 'react';

import { Month } from '../src';

export default {
  title: 'Components/Calendar/Month',
  component: Month,
  argTypes: {
    onDayClick: { action: 'Month onDayClick callback' },
    onDayMouseEnter: { action: 'Month onDayMouseEnter callback' },
    onMouseLeave: { action: 'Month onMouseLeave callback' },
   },
};

const Template = (args) => <Month {...args} />;

export const MonthComponent = Template.bind({});
MonthComponent.args = {
  date: new Date(2021, 2, 15),
};

export const CurrentMonth = Template.bind({});
CurrentMonth.args = {
  date: new Date(),
};

export const ChristmasHoliday = Template.bind({});
ChristmasHoliday.args = {
  date: new Date(2020, 11, 2),
  selected: {
    start: new Date(2020, 11, 14),
    end: new Date(2020, 11, 29),
  }
};
ChristmasHoliday.storyName = 'Christmas 2020 Holiday Selected';

export const MyBirthday = Template.bind({});
MyBirthday.args = {
  date: new Date(1989, 5, 2),
  selected: {
    start: new Date(1989, 5, 26),
  }
};

export const Today = Template.bind({});
Today.args = {
  date: new Date(),
  selected: {
    start: new Date(),
  }
};

export const FromToday = Template.bind({});
FromToday.args = {
  date: new Date(),
  selected: {
    start: new Date(),
    end: new Date(2200, 1),
  }
};

export const ToToday = Template.bind({});
ToToday.args = {
  date: new Date(),
  selected: {
    start: new Date(1990, 1),
    end: new Date(),
  }
};
