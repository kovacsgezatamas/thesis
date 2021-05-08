import PropTypes from 'prop-types';

import * as Styled from './Spinner.styled';

function Spinner({ isSmall, ...restProps }) {
  return (
    <Styled.Svg isSmall={isSmall} {...restProps}>
      <Styled.Circle isSmall={isSmall} />
    </Styled.Svg>
  );
}

Spinner.propTypes = {
  isSmall: PropTypes.bool,
}

Spinner.defaultProps = {
  isSmall: false,
};

export default Spinner;
