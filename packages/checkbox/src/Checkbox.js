import React from 'react';
import PropTypes from 'prop-types';

import SwitchBase from '@thesis-ui/switch-base';

import * as Styled from './Checkbox.styled';

function Checkbox({
  isChecked,
  isIndeterminate,
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
        <Styled.Icon
          isChecked={isChecked}
          isIndeterminate={isIndeterminate}
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

Checkbox.propTypes = {
  /**
   * Checked state of the component
   */
  isChecked: PropTypes.bool,
  /**
   * Indeterminate state of the component
   */
  isIndeterminate: PropTypes.bool,
  /**
   * Set the checkbox component into disabled state
   */
  isDisabled: PropTypes.bool,
  /**
   * Display the error state and theme of the component
   */
  hasError: PropTypes.bool,
  /**
   * Native checkbox element value
   */
  value: PropTypes.string,
  /**
   * Checkbox label text
   */
  labelValue: PropTypes.string,
  /**
   * Checkbox change callback function
   */
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  isChecked: false,
  isIndeterminate: false,
  isDisabled: false,
  hasError: false,
  value: '',
  labelValue: null,
  onChange: () => {},
};

export default Checkbox;
