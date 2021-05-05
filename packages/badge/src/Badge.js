import PropTypes from 'prop-types';

import * as Styled from './Badge.styled';
import BADGE_POSITION from './constants';

function Badge({ isSecondary, isSmall, isInner, position, children }) {
  return (
    <Styled.Badge
      isSecondary={isSecondary}
      isSmall={isSmall}
      isInner={isInner}
      position={position}
    >
      {children}
    </Styled.Badge>
  )
}

Badge.propTypes = {
  isSecondary: PropTypes.bool,
  isSmall: PropTypes.bool,
  isInner: PropTypes.bool,
  position: PropTypes.oneOf([
    'topRight',
    'topLeft',
    'bottomRight',
    'bottomLeft',
  ]),
  children: PropTypes.any,
};

Badge.defaultProps = {
  isSecondary: false,
  isSmall: false,
  isInner: false,
  position: 'topRight',
  children: null,
};

export default Badge;

export { BADGE_POSITION };
