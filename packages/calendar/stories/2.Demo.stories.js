import React, { useState } from 'react';
import format from 'date-fns/format';
import Calendar from '../src';

export default {
  title: 'Components/Calendar/ComponentDemo',
};

export const DateSelection = (args) => {
  const [date, setDate] = useState();

  function onDateChange(newDate) {
    setDate(newDate);
  }

  return (
    <div style={{ width: '252px', height: '310px' }}>
      <Calendar
        {...args}
        date={date}
        mode="DATE"
        monthsNumber={1}
        onDateChange={onDateChange}
      />

      <div style={{ marginTop: '24px' }}><strong>Selected date</strong></div>
      <div><strong>Start: </strong>{date ? format(date, 'dd MMM yyyy') : '-'}</div>
    </div>
  );
};
DateSelection.args = {
  hasHighlighting: true,
};

export const DateRangeSelection = (args) => {
  const [dateRange, setDateRange] = useState(undefined);

  function onDateRangeChange(newDateRange) {
    setDateRange(newDateRange);
  }

  return (
    <div style={{ width: '520px', height: '310px' }}>
      <Calendar
        {...args}
        dateRange={dateRange}
        mode="DATE_RANGE"
        monthsNumber={2}
        onDateRangeChange={onDateRangeChange}
      />

      <div style={{ marginTop: '24px' }}><strong>Selected date range</strong></div>
      <div><strong>Start: </strong>{dateRange?.start ? format(dateRange.start, 'dd MMM yyyy') : '-'}</div>
      <div><strong>End: </strong>{dateRange?.end ? format(dateRange.end, 'dd MMM yyyy') : '-'}</div>
    </div>
  );
};
DateRangeSelection.args = {
  hasHighlighting: true,
};
