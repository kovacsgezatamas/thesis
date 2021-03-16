import styled from 'styled-components';

import { color, fontSize, lineHeight } from '../../packages/tokens/src';

const TokenName = styled.div.attrs(() => ({
  'data-test-id': 'SB_TOKEN_NAME',
}))`
  color: ${color.grayDark45};
  font-size: ${fontSize.lg};
  line-height: ${lineHeight.md};
  width: ${({ width }) => width || '200px'};
  min-width: ${({ width }) => width || '200px'};
`;

export default TokenName;
