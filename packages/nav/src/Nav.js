import styled from 'styled-components';
import PropTypes from 'prop-types';

import { nav as theme } from '@thesis-ui/theme';

const Nav = styled.div.attrs(() => ({
  'data-test-id': 'NAV',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};

  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 200px;
  height: 100%;
  width: ${({ isCollapsed }) => isCollapsed ? theme.collapsedWidth : theme.width};

  background: ${theme.background};
  color: ${theme.color};
  border-right: ${theme.border};
`;

Nav.propTypes = {
  isCollapsed: PropTypes.bool,
};

Nav.defaultProps = {
  isCollapsed: false,
};

Nav.displayName = 'Nav';

export default Nav;
