import React from 'react';

import * as Styled from './SwitchBase.styled';

function SwitchBase({
  isChecked,
  isDisabled,
  icon,
  value,
  labelValue,
  onChange,
  ...restProps
}) {
  function onInputCheckedChange(event) {
    console.log('asd1234');
    event.stopPropagation();

    onChange(value);
  }

  return (
    <Styled.Container {...restProps}>
      <label>
        <Styled.Input
          checked={isChecked}
          disabled={isDisabled}
          value={value}
          type="checkbox"
          onChange={onInputCheckedChange}
        />
        {icon}
        {labelValue}
      </label>
    </Styled.Container>
  )
}

export default SwitchBase;
