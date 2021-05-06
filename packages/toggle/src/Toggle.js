import PropTypes from 'prop-types';

import * as Styled from './Toggle.styled';

function Toggle({ isSmall, isDisabled, value, ...restProps }) {
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

Toggle.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
};

Toggle.defaultProps = {
  isSmall: false,
  isDisabled: false,
  value: '',
};

export default Toggle;
