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
  value: PropTypes.string,
};

TextField.defaultProps = {
  isSmall: false,
  isDisabled: false,
  value: '',
};

export default TextField;
