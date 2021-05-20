import React, { useState } from 'react';
import PropTypes from 'prop-types';
import isDate from 'date-fns/isDate';
import addMonths from 'date-fns/addMonths';
import eachMonthOfInterval from 'date-fns/eachMonthOfInterval';
import isBefore from 'date-fns/isBefore';

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
  hasHighlighting,
  onDateChange,
  onDateRangeChange,
}) {
  const [focusedDate, setFocusedDate] = useState(getFocusedDate(date, dateRange, mode));
  const [highlighted, setHighlighted] = useState();

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

  function onDayClick(date) {
    const dateClone = new Date(date);

    if (mode === calendarMode.DATE) {
      onDateChange(dateClone);
      return;
    }

    if (dateRange?.end || !dateRange?.start) {
      onDateRangeChange({ start: dateClone });
      return;
    }

    let start = dateRange.start;
    let end = dateClone;

    if (isBefore(end, start)) {
      [start, end] = [end, start];
    }

    onDateRangeChange({ start, end });

    if (hasHighlighting) {
      setHighlighted({ start: new Date(date) });
    }
  }

  function onDayMouseEnter(date) {
    const dateClone = new Date(date);

    if (!hasHighlighting) {
      return;
    }

    if (mode === calendarMode.DATE) {
      setHighlighted({ start: dateClone });
      return;
    }

    if (dateRange?.start && !dateRange?.end) {
      let start = new Date(dateRange.start);
      let end = dateClone;

      if (isBefore(end, start)) {
        [start, end] = [end, start];
      }

      setHighlighted({ start, end });
      return;
    }

    setHighlighted({ start: dateClone });
  }

  function onMonthMouseLeave() {
    if (!hasHighlighting) {
      return;
    }

    setHighlighted(undefined);
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
              highlighted={highlighted}
              onDayClick={onDayClick}
              onDayMouseEnter={onDayMouseEnter}
              onMouseLeave={onMonthMouseLeave}
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
  hasHighlighting: PropTypes.bool,
  onDateChange: PropTypes.func,
  onDateRangeChange: PropTypes.func,
};

Calendar.defaultProps = {
  date: undefined,
  dateRange: undefined,
  mode: 'DATE',
  monthsNumber: 2,
  hasHighlighting: true,
  onDateChange: () => {},
  onDateRangeChange: () => {},
}

export default Calendar;
