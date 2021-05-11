import React from 'react';
import PropTypes from 'prop-types';

import SwitchBase from '@thesis-ui/switch-base';

import * as Styled from './Toggle.styled';

function Toggle({
  isChecked,
  isDisabled,
  hasError,
  value,
  labelValue,
  onChange,
  ...restProps
 }) {
  return (
    <SwitchBase
      isChecked={isChecked}
      isDisabled={isDisabled}
      icon={(
        <Styled.ToggleItem
          isChecked={isChecked}
          isDisabled={isDisabled}
          hasError={hasError}
        />
      )}
      value={value}
      labelValue={labelValue}
      onChange={onChange}
      {...restProps}
    />
  );
}

Toggle.propTypes = {
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  labelValue: PropTypes.string,
  onChange: PropTypes.func,
};

Toggle.defaultProps = {
  isChecked: false,
  isDisabled: false,
  hasError: false,
  value: '',
  labelValue: null,
  onChange: () => {},
};

export default Toggle;
