import styled from 'styled-components';

import { spacing } from '../../packages/constants/src';

const ColorContainer = styled.div.attrs(() => ({
  'data-test-id': 'SB_COLOR_CONTAINER',
}))`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 280px;
  margin: ${spacing.lg} 0;
`;

export default ColorContainer;
