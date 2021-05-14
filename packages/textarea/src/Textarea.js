import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Textarea.styled';

const Textarea = React.forwardRef(
  (
    {
      isDisabled,
      isReadOnly,
      isRequired,
      hasError,
      minLength,
      maxLength,
      autoComplete,
      cols,
      rows,
      resize,
      name,
      placeholder,
      value,
      onChange,
      ...restProps
    },
    ref
  ) => {
    return (
      <Styled.Textarea
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        hasError={hasError}
        minLength={minLength}
        maxLength={maxLength}
        autoComplete={autoComplete}
        cols={cols}
        rows={rows}
        resize={resize}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
        {...restProps}
      />
    )
  }
);

Textarea.propTypes = {
  isDisabled: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  hasError: PropTypes.bool,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
  autoComplete: PropTypes.string,
  cols: PropTypes.number,
  rows: PropTypes.number,
  resize: PropTypes.oneOf([
    'none',
    'both',
    'horizontal',
    'vertical',
    'initial',
    'inherit',
  ]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Textarea.defaultProps = {
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  hasError: false,
  minLength: undefined,
  maxLength: undefined,
  autoComplete: undefined,
  cols: undefined,
  rows: undefined,
  resize: 'both',
  name: undefined,
  placeholder: undefined,
  value: '',
  onChange: undefined,
};

export default Textarea;
