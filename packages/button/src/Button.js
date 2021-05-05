import PropTypes from 'prop-types';

import * as Styled from './Button.styled';

function Button({ isSecondary, isSmall, isDisabled, children, ...restProps }) {
  return (
    <Styled.Button
      isSecondary={isSecondary}
      isSmall={isSmall}
      disabled={isDisabled}
      {...restProps}
    >
      {children}
    </Styled.Button>
  )
}

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
