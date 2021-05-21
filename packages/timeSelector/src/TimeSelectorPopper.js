import React, { useEffect, useRef } from 'react';

import * as Styled from './TimeSelector.styled';

const timeValues = [];

for (let i = 0; i <= 23; i += 1) {
  timeValues.push(
    { hours: i, minutes: 0 },
    { hours: i, minutes: 15 },
    { hours: i, minutes: 30 },
    { hours: i, minutes: 45 }
  );
}

function areTimeValuesEqual(a, b) {
  if (!a || !b) {
    return false;
  }

  return a.hours === b.hours && a.minutes === b.minutes;
}

function getListScrollTop(timeValue) {
  if (!timeValue) {
    return 0;
  }

  const LIST_ITEM_HEIGHT = 28;
  const MINUTE_COUNT = 4;

  return timeValue.hours * MINUTE_COUNT * LIST_ITEM_HEIGHT;
}

const TimeSelectorPopper = React.forwardRef(
  ({ value, formatValue, onChange, ...restProps }, ref) => {
    const listRef = useRef(null);

    useEffect(() => {
      if (!listRef.current) {
        return;
      }

      listRef.current.scrollTop = getListScrollTop(value);
    }, [value]);

    return (
      <Styled.Container ref={ref} {...restProps}>
        <Styled.TimeItemList ref={listRef}>
          {timeValues.map(timeValue => {
            const formattedTimeValue = formatValue(timeValue);

            return (
              <Styled.TimeItem
                key={formattedTimeValue}
                isSelected={areTimeValuesEqual(timeValue, value)}
                onMouseDown={() => onChange(timeValue)}
              >
                {formattedTimeValue}
              </Styled.TimeItem>
            )
          })}
        </Styled.TimeItemList>
      </Styled.Container>
    );
  }
)

export default TimeSelectorPopper;
