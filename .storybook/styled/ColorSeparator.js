import styled from 'styled-components';

import { spacing, color } from '../../packages/tokens/src';

const ColorSeparator = styled.div.attrs(() => ({
  'data-test-id': 'SB_COLOR_SEPARATOR',
}))`
  width: 100%;
  display: flex;
  margin: ${spacing.lg} 0;
  border-bottom: 1px solid ${color.silverLight10};
`;

export default ColorSeparator;
