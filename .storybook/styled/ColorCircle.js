import styled from 'styled-components';

import { color, spacing } from '../../packages/constants/src';

const ColorCircle = styled.div.attrs(() => ({
  'data-test-id': 'SB_COLOR_CIRCLE',
}))`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: ${spacing.md};
  border: ${({ hasBorder }) => hasBorder ? `2px solid ${color.grayDark15}` : '0 none'};
  background: ${({ background }) => background};
`;

export default ColorCircle;
