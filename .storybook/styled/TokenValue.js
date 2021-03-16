import styled from 'styled-components';

import { color, fontSize, lineHeight, spacing } from '../../packages/tokens/src';

const TokenValue = styled.div.attrs(() => ({
  'data-test-id': 'SB_TOKEN_VALUE',
}))`
  color: ${color.silverDark40};
  font-size: ${fontSize.xl};
  line-height: ${lineHeight.md};
  margin: ${spacing.md} ${spacing.xxl} ${spacing.md} 0;
`;

export default TokenValue;
