import React from 'react';
import PropTypes from 'prop-types';
import { color } from '@thesis-ui/constants';

function Button({ children, ...rest }) {
  return (
    <button
      style={{ background: color.burningOrange }}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  isPrimary: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isPrimary: false,
  onClick: undefined,
};

export default Button;
