import PropTypes from 'prop-types';

import * as Styled from './Radio.styled';

function Radio({ isSmall, isDisabled, value, ...restProps }) {
  return (
    <input
      isSmall={isSmall}
      disabled={isDisabled}
      value={value}
      type="radio"
      {...restProps}
    />
  );
}

Radio.propTypes = {
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  value: PropTypes.string,
};

Radio.defaultProps = {
  isSmall: false,
  isDisabled: false,
  value: '',
};

export default Radio;
