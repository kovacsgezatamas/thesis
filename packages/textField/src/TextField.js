import PropTypes from 'prop-types';

import * as Styled from './TextField.styled';

function TextField({ isSmall, isDisabled, value, ...restProps }) {
  return (
    <input
      isSmall={isSmall}
      disabled={isDisabled}
      value={value}
      {...restProps}
    />
  );
}

TextField.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasError: PropTypes.bool,
  isMultiline: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  isRequired: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  min: PropTypes.number,
  max: PropTypes.number,
  autoComplete: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  rowsMax: PropTypes.number,
  prefix: PropTypes.element,
  suffix: PropTypes.element,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  isSmall: false,
  isDisabled: false,
  hasError: false,
  isMultiline: false,
  isReadOnly: false,
  isRequired: false,
  value: undefined,
  min: undefined,
  max: undefined,
  autoComplete: undefined,
  name: undefined,
  type: 'text',
  placeholder: undefined,
  rows: undefined,
  rowsMax: undefined,
  prefix: null,
  suffix: null,
  onChange: undefined,
};

export default TextField;
