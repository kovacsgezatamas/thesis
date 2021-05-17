import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { nav as theme } from '@thesis-ui/theme';

function getTitle({ title, children }) {
  if (title) {
    return title;
  }

  return typeof children === 'string' ? children : undefined;
}

function getStateStyles({ isSelected, isDisabled }) {
  if (isSelected) {
    return css`
      color: ${theme.itemSelectedColor};
      background: ${theme.itemSelectedBackground};
      font-weight: ${theme.selectedFontWeight};
    `;
  }

  if (isDisabled) {
    return css`
      color: ${theme.itemDisabledColor};
      background: ${theme.itemDisabledBackground};
      font-weight: ${theme.disabledFontWeight};
    `;
  }

  return css`
    color: ${theme.itemColor};
    background: ${theme.itemBackground};
    font-weight: ${theme.fontWeight};
  `;
}

const NavItem = styled.div.attrs((props) => ({
  'data-test-id': 'NAV_ITEM',
  title: getTitle(props),
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  position: relative;

  cursor: ${({ isDisabled }) => isDisabled ? 'auto' : 'pointer'};
  padding: ${theme.itemPadding};

  ${getStateStyles};
  border-bottom: ${({ isSelected }) => isSelected ? theme.itemSelectedBorderBottom : theme.itemBorderBottom};
`;

NavItem.propTypes = {
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

NavItem.defaultProps = {
  isSelected: false,
  isDisabled: false,
}

NavItem.displayName = 'NavItem';

export default NavItem;
