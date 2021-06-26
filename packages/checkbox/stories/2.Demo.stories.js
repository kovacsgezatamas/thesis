import React, { useState } from 'react';
import Checkbox from '../src';

export default {
  title: 'Components/Checkbox/ComponentDemo',
};

export const CheckUncheck = (args) => {
  const [isChecked, setIsChecked] = useState(false);

  function onChange() {
    setIsChecked(!isChecked);
  }

  return (
    <Checkbox
      {...args}
      isChecked={isChecked}
      value="testValue"
      labelValue={`Click me to ${isChecked ? 'uncheck' : 'check'}`}
      onChange={onChange}
    />
  );
};
CheckUncheck.args = {
  isDisabled: false,
  hasError: false,
  isIndeterminate: false,
};
