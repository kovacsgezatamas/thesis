import PropTypes from 'prop-types';

import * as Styled from './Loader.styled';

function Loader({ isSmall, progress, ...restProps }) {
  let normalizedProgress = progress || 0;

  if (normalizedProgress < 0) {
    normalizedProgress = 0;
  }

  if (normalizedProgress > 100) {
    normalizedProgress = 100;
  }

  return (
    <Styled.Container isSmall={isSmall} {...restProps}>
      <Styled.ProgressBar progress={normalizedProgress} />
    </Styled.Container>
  );
}

Loader.propTypes = {
  isSmall: PropTypes.bool,
  progress: PropTypes.number,
};

Loader.defaultProps = {
  isSmall: false,
  progress: 0,
};

export default Loader;
