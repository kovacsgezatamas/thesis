import PropTypes from 'prop-types';

import * as Styled from './Tabs.styled';

function Tab({
  isSelected,
  isStreched,
  isDisabled, isMultiline, children, ...restProps }) {
  return (
    <Styled.TabButton
      isSelected={isSelected}
      isStreched={isStreched}
      isDisabled={isDisabled}
      isMultiline={isMultiline}
      {...restProps}
    >
      {children}
    </Styled.TabButton>
  );
}

Tab.propTypes = {
  isSelected: PropTypes.bool,
  isStreched: PropTypes.bool,
  isDisabled: PropTypes.bool,
}

Tab.defaultProps = {
  isSelected: false,
  isStreched: false,
  isDisabled: false,
};

export default Tab;
