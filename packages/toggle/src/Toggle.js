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
  /**
   * Checked state of the component
   */
  isChecked: PropTypes.bool,
  /**
   * Set the toggle component into disabled state
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
   * Toggle label text
   */
  labelValue: PropTypes.string,
  /**
   * Change callback function
   */
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
