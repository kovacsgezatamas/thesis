import PropTypes from 'prop-types';

import * as Styled from './Tabs.styled';

function Tab({
  isSelected,
  isDisabled,
  isMultiline,
  children,
  ...restProps
}) {
  return (
    <Styled.TabButton
      isSelected={isSelected}
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
  isDisabled: PropTypes.bool,
  isMultiline: PropTypes.bool,
}

Tab.defaultProps = {
  isSelected: false,
  isDisabled: false,
  isMultiline: false,
};

export default Tab;
