import React from 'react';

import { Day } from '../src';

export default {
  title: 'Components/Calendar/Day',
  component: Day,
};

const Template = (args) => <Day {...args} />;

export const DayComponent = Template.bind({});
DayComponent.args = {
  date: new Date(2021, 2, 15),
};

export const Weekend = Template.bind({});
Weekend.args = {
  date: new Date(2021, 2, 13),
};

export const Today = Template.bind({});
Today.args = {
  date: new Date(),
};

export const IntervalStart = Template.bind({});
IntervalStart.args = {
  date: new Date(2021, 2, 15),
  selected: {
    start: new Date(2021, 2, 15),
    end: new Date(2021, 2, 21),
  }
};

export const IntervalStartToday = Template.bind({});
IntervalStartToday.args = {
  date: new Date(),
  selected: {
    start: new Date(),
    end: new Date(2099, 0, 1),
  }
};

export const IntervalEnd = Template.bind({});
IntervalEnd.args = {
  date: new Date(2021, 2, 15),
  selected: {
    start: new Date(2021, 2, 1),
    end: new Date(2021, 2, 15),
  }
};

export const IntervalEndToday = Template.bind({});
IntervalEndToday.args = {
  date: new Date(),
  selected: {
    start: new Date(1990, 0, 1),
    end: new Date(),
  }
};

export const IntervalStartEnd = Template.bind({});
IntervalStartEnd.args = {
  date: new Date(2021, 3, 15),
  selected: {
    start: new Date(2021, 3, 15),
    end: new Date(2021, 3, 15),
  }
};

export const IntervalStartEndToday = Template.bind({});
IntervalStartEndToday.args = {
  date: new Date(),
  selected: {
    start: new Date(),
    end: new Date(),
  }
};

export const InInterval = Template.bind({});
InInterval.args = {
  date: new Date(2021, 3, 15),
  selected: {
    start: new Date(2021, 3, 1),
    end: new Date(2021, 3, 21),
  }
};

export const InIntervalToday = Template.bind({});
InIntervalToday.args = {
  date: new Date(),
  selected: {
    start: new Date(1990, 1, 1),
    end: new Date(2099, 1, 1),
  }
};

export const AsIntervalStartNoIntervalEnd = Template.bind({});
AsIntervalStartNoIntervalEnd.args = {
  date: new Date(2021, 3, 15),
  selected: {
    start: new Date(2021, 3, 15),
    end: undefined,
  }
}
