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
  /**
   * Use secondary color instead of the default
   */
  isSecondary: PropTypes.bool,
  /**
   * Flag to switch to small size
   */
  isSmall: PropTypes.bool,
  /**
   * Position the element inside the container
   */
  isInner: PropTypes.bool,
  /**
   * Badge position related to the container element
   */
  position: PropTypes.oneOf([
    'topRight',
    'topLeft',
    'bottomRight',
    'bottomLeft',
  ]),
  /**
   * Renderable content inside the badge bullet
   */
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
