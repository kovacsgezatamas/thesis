import React from 'react';
import startOfWeek  from 'date-fns/startOfWeek';
import endOfWeek  from 'date-fns/endOfWeek';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import format from 'date-fns/format';

import * as Styled from './MonthHeader.styled';

function MonthHeader() {
  const now = new Date();
  const interval = {
    start: startOfWeek(now),
    end: endOfWeek(now),
  };

  return (
    <Styled.Container>
      {eachDayOfInterval(interval).map(date => (
        <Styled.DayOfWeek key={date}>
          {format(date, 'ccc')}
        </Styled.DayOfWeek>
      ))}
    </Styled.Container>
  );

}

export default MonthHeader;
