import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isDate from 'date-fns/isDate';
import addMonths from 'date-fns/addMonths';
import eachMonthOfInterval from 'date-fns/eachMonthOfInterval';

import Month from './Month';
import * as Styled from './Calendar.styled';

const calendarMode = {
  DATE: 'DATE',
  DATE_RANGE: 'DATE_RANGE',
};

function getFocusedDate(date, dateRange, mode) {
  if (mode === calendarMode.DATE) {
    return isDate(date) ? date : new Date();
  }

  if (isDate(dateRange?.end)) {
    return dateRange.end;
  }

  if (isDate(dateRange?.start)) {
    return dateRange.start;
  }

  return new Date();
}

function getSelectedInterval(date, dateRange, mode) {
  if (mode === calendarMode.DATE) {
    return isDate(date) ?
      { start: date } :
      undefined;
  };

  if (isDate(dateRange?.start)) {
    return {
      start: dateRange.start,
      end: dateRange.end,
    };
  }

  return undefined;
}

function Calendar({
  date,
  dateRange,
  mode,
  monthsNumber,
  onDateChange,
  onDateRangeChange,
}) {
  const [focusedDate, setFocusedDate] = useState(getFocusedDate(date, dateRange, mode));

  function navigateToPrevMonth() {
    if (!isDate(focusedDate)) {
      return
    }

    setFocusedDate(addMonths(focusedDate, -1));
  }

  function navigateToNextMonth() {
    if (!isDate(focusedDate)) {
      return
    }

    setFocusedDate(addMonths(focusedDate, 1));
  }

  if (!focusedDate) {
    return null;
  }

  const lastFocusedDate = addMonths(focusedDate, monthsNumber - 1);
  const selected = getSelectedInterval(date, dateRange, mode);

  return (
    <Styled.Container>
      <Styled.Navigation>
        <Styled.PrevMonth onClick={navigateToPrevMonth} />
        <Styled.NextMonth onClick={navigateToNextMonth} />
      </Styled.Navigation>

      <Styled.Content>
        {eachMonthOfInterval({
          start: focusedDate,
          end: lastFocusedDate,
          }).map(date => (
            <Month
              date={date}
              selected={selected}
              key={date}
            />
          ))
        }
      </Styled.Content>
    </Styled.Container>
  );
  return ;
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  dateRange: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
  mode: PropTypes.oneOf(['DATE', 'DATE_RANGE']),
  monthsNumber: PropTypes.number,
  onDateChange: PropTypes.func,
  onDateRangeChange: PropTypes.func,
};

Calendar.defaultProps = {
  date: undefined,
  dateRange: undefined,
  mode: 'DATE',
  monthsNumber: 2,
  onDateChange: () => {},
  onDateRangeChange: () => {},
}

export default Calendar;
