import React from 'react';

import { Day } from '../src';

export default {
  title: 'Components/Calendar/Day',
  component: Day,
  argTypes: {
    onClick: { action: 'Day onClick callback' },
    onMouseEnter: { action: 'Day onMouseEnter callback' },
    onMouseLeave: { action: 'Day onMouseLeave callback' },
   },
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

export const SelectedStart = Template.bind({});
SelectedStart.args = {
  date: new Date(2021, 2, 15),
  selected: {
    start: new Date(2021, 2, 15),
    end: new Date(2021, 2, 21),
  }
};

export const SelectedStartToday = Template.bind({});
SelectedStartToday.args = {
  date: new Date(),
  selected: {
    start: new Date(),
    end: new Date(2099, 0, 1),
  }
};

export const SelectedEnd = Template.bind({});
SelectedEnd.args = {
  date: new Date(2021, 2, 15),
  selected: {
    start: new Date(2021, 2, 1),
    end: new Date(2021, 2, 15),
  }
};

export const SelectedEndToday = Template.bind({});
SelectedEndToday.args = {
  date: new Date(),
  selected: {
    start: new Date(1990, 0, 1),
    end: new Date(),
  }
};

export const SelectedStartEnd = Template.bind({});
SelectedStartEnd.args = {
  date: new Date(2021, 3, 15),
  selected: {
    start: new Date(2021, 3, 15),
    end: new Date(2021, 3, 15),
  }
};

export const SelectedStartEndToday = Template.bind({});
SelectedStartEndToday.args = {
  date: new Date(),
  selected: {
    start: new Date(),
    end: new Date(),
  }
};

export const InSelected = Template.bind({});
InSelected.args = {
  date: new Date(2021, 3, 15),
  selected: {
    start: new Date(2021, 3, 1),
    end: new Date(2021, 3, 21),
  }
};

export const InSelectedToday = Template.bind({});
InSelectedToday.args = {
  date: new Date(),
  selected: {
    start: new Date(1990, 1, 1),
    end: new Date(2099, 1, 1),
  }
};

export const SelectedStartNoSelectedEnd = Template.bind({});
SelectedStartNoSelectedEnd.args = {
  date: new Date(2021, 3, 15),
  selected: {
    start: new Date(2021, 3, 15),
    end: undefined,
  }
};
