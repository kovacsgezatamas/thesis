import React from 'react';
import PropTypes from 'prop-types';
import isDate from 'date-fns/isDate';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';
import getDay from 'date-fns/getDay';
import format from 'date-fns/format';

import MonthHeader from './MonthHeader';
import Day from './Day';
import * as Styled from './Month.styled';

function Month({
  date,
  selected,
  highlighted,
  onDayClick,
  onDayMouseEnter,
  onMouseLeave,
}) {
  if (!isDate(date)) {
    return null;
  }

  const interval = {
    start: startOfMonth(date),
    end: endOfMonth(date),
  };
  const dayPlaceholders = getDay(interval.start);

  return (
    <Styled.Container>
      <Styled.MonthName>
        {format(date, 'MMM yyyy')}
      </Styled.MonthName>

      <MonthHeader />

      <Styled.Content onMouseLeave={onMouseLeave}>
        {[...Array(dayPlaceholders)].map((any, index) => (
          <Styled.DayPlaceholder key={index} />
        ))}

        {eachDayOfInterval(interval).map(date => (
          <Day
            date={date}
            selected={selected}
            highlighted={highlighted}
            key={date}
            onClick={() => onDayClick(date)}
            onMouseEnter={() => onDayMouseEnter(date)}
          />
        ))}
      </Styled.Content>
    </Styled.Container>
  )
}

Month.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  selected: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
  highlighted: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
  }),
  onDayClick: PropTypes.func,
  onDayMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

Month.defaultProps = {
  selected: {},
  highlighted: {},
};

export default Month;
