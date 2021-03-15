import styled from 'styled-components';

import { color } from '../../packages/constants/src';

const ColorValue = styled.div.attrs(() => ({
  'data-test-id': 'SB_COLOR_VALUE',
}))`
  color: ${color.grayDark35};
`;

export default ColorValue;
