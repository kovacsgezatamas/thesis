import styled from 'styled-components';

import {
  color,
  spacing,
  fontFamily,
  fontSize,
  lineHeight
} from '../../packages/constants/src';

const MainContainer = styled.div.attrs(() => ({
  'data-test-id': 'SB_MAIN_CONTAINER',
}))`
  font-family: ${fontFamily};
  font-size: ${fontSize.md};
  line-height: ${lineHeight.md};
  margin: ${spacing.xxl};
  color: ${color.grayDark25};

  * {
    box-sizing: border-box;
  }
`;

export default MainContainer;
