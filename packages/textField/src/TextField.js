import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './TextField.styled';

const TextField = React.forwardRef(
  (
    {
      isSmall,
      isDisabled,
      hasError,
      isReadOnly,
      isRequired,
      value,
      min,
      max,
      autoComplete,
      name,
      type,
      placeholder,
      prefix,
      suffix,
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <Styled.Container
        ref={ref}
        isSmall={isSmall}
        isDisabled={isDisabled}
        hasError={hasError}
        {...restProps}
      >
        {prefix}

        <Styled.Input
          disabled={isDisabled}
          readOnly={isReadOnly}
          required={isRequired}
          value={value}
          min={min}
          max={max}
          autoComplete={autoComplete}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />

        {suffix}
      </Styled.Container>
    )
  }
);

TextField.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.number,
  max: PropTypes.number,
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  isSmall: false,
  isDisabled: false,
  hasError: false,
  isReadOnly: false,
  isRequired: false,
  value: undefined,
  min: undefined,
  max: undefined,
  autoComplete: undefined,
  name: undefined,
  type: 'text',
  placeholder: undefined,
  prefix: null,
  suffix: null,
  onChange: undefined,
};

export default TextField;
