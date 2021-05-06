import PropTypes from 'prop-types';

import * as Styled from './Checkbox.styled';

function Checkbox({ isSmall, isDisabled, value, ...restProps }) {
  return (
    <input
      isSmall={isSmall}
      disabled={isDisabled}
      value={value}
      type="checkbox"
      {...restProps}
    />
  );
}

Checkbox.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
};

Checkbox.defaultProps = {
  isSmall: false,
  isDisabled: false,
  value: '',
};

export default Checkbox;
