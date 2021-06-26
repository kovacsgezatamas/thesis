import React, { useState } from 'react';

import TimeSelector from '../src';

export default {
  title: 'Components/TimeSelector/ComponentDemo',
};

export const TimeSelection = (args) => {
  const [time, setTime] = useState();

  function onChange(newTime) {
    setTime(newTime);
  }

  return (
    <div style={{ width: '200px', height: '350px' }}>
      <div><strong>Selected time</strong></div>
      <div><strong>Hours: </strong>{time ? time.hours : '-'}</div>
      <div style={{ marginBottom: '24px' }}>
        <strong>Minutes: </strong>{time ? time.minutes : '-'}
      </div>

      <TimeSelector
        {...args}
        value={time}
        onChange={onChange}
      />
    </div>
  );
};
TimeSelection.args = {
  isSmall: false,
  isDisabled: false,
  hasError: false,
  isRequired: false,
};
