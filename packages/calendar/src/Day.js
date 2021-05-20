import React from 'react';
import PropTypes from 'prop-types';
import getDate from 'date-fns/getDate';
import isToday from 'date-fns/isToday';
import isWeekend from 'date-fns/isWeekend';
import isDate from 'date-fns/isDate';
import startOfDay from 'date-fns/startOfDay';
import endOfDay from 'date-fns/endOfDay';
import isWithinInterval from 'date-fns/isWithinInterval';
import isSameDay from 'date-fns/isSameDay';

import * as Styled from './Calendar.styled';

function getDaySelectedProps(date, selected) {
  let { start, end } = selected;
  end = end || start;

  if (!isDate(start) || !isDate(end)) {
    return {};
  }

  const extendedStart = startOfDay(start);
  const extendedEnd = endOfDay(end);

  return {
    isSelected: isWithinInterval(date, { start: extendedStart, end: extendedEnd }),
    isSelectedStart: isSameDay(date, extendedStart),
    isSelectedEnd: isSameDay(date, extendedEnd),
  }
}

function Day({ date, selected, focused }) {
  if (!date) {
    return <Styled.DayContainer />;
  }

  const dayNumber = getDate(date);
  const dayContainerProps = {
    isToday: isToday(date),
    isWeekend: isWeekend(date),
    ...getDaySelectedProps(date, selected)
  };

  return (
    <Styled.DayContainer {...dayContainerProps}>
      {dayNumber}
    </Styled.DayContainer>
  );
}

Day.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  selected: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
  focused: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
};

Day.defaultProps = {
  selected: {},
  focused: {},
};

export default React.memo(Day);
export { Day };
