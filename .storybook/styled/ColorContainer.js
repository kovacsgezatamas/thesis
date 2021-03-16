import styled from 'styled-components';

import { spacing } from '../../packages/tokens/src';

const ColorContainer = styled.div.attrs(() => ({
  'data-test-id': 'SB_COLOR_CONTAINER',
}))`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 300px;
  margin: ${spacing.md} 0;
`;

export default ColorContainer;
