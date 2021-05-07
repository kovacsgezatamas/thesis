import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Button.styled';

const Button = React.forwardRef(
  ({ isSecondary, isSmall, isDisabled, children, ...restProps }, ref) => (
    <Styled.Button
      isSecondary={isSecondary}
      isSmall={isSmall}
      disabled={isDisabled}
      ref={ref}
      {...restProps}
    >
      {children}
    </Styled.Button>
  )
);

Button.propTypes = {
  isSecondary: PropTypes.bool,
  isSmall: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isSecondary: false,
  isSmall: false,
  isDisabled: false,
  onClick: undefined,
};

export default Button;
