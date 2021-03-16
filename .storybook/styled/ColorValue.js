import styled from 'styled-components';

import { color, fontSize } from '../../packages/tokens/src';

const ColorValue = styled.div.attrs(() => ({
  'data-test-id': 'SB_COLOR_VALUE',
}))`
  color: ${color.grayDark35};
  font-size: ${({ isName }) => isName ? fontSize.lg : fontSize.sm};
`;

export default ColorValue;
