import React, { useState } from 'react';
import Toggle from '../src';

export default {
  title: 'Components/Toggle/ComponentDemo',
};

export const OnOff = (args) => {
  const [isOn, setIsOn] = useState(false);

  function onChange() {
    setIsOn(!isOn);
  }

  return (
    <Toggle
      {...args}
      isChecked={isOn}
      value="testValue"
      labelValue={`Click me to turn ${isOn ? 'off' : 'on'}`}
      onChange={onChange}
    />
  );
};
OnOff.args = {
  isDisabled: false,
  hasError: false,
};
