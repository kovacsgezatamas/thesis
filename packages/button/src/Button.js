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
  /**
   * Use the secondary colors for the component
   */
  isSecondary: PropTypes.bool,
  /**
   * Flag to switch to small size
   */
  isSmall: PropTypes.bool,
  /**
   * Set the button component into disabled state
   */
  isDisabled: PropTypes.bool,
  /**
   * Button label, text rendered inside the button
   */
  children: PropTypes.string.isRequired,
  /**
   * Click callback function
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  isSecondary: false,
  isSmall: false,
  isDisabled: false,
  onClick: undefined,
};

export default Button;
