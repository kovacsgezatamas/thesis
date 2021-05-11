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
  isChecked: PropTypes.bool,
  isIndeterminate: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  value: PropTypes.string,
  labelValue: PropTypes.string,
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
