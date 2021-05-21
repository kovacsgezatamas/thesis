import styled from 'styled-components';

import { timeSelector as theme } from '@thesis-ui/theme';

const Container = styled.div.attrs(() => ({
  'data-test-id': 'TIME_SELECTOR_DROPDOWN',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeight};
  width: ${theme.width};
  height: ${theme.height};
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  background: ${theme.background};
  color: ${theme.color};
  z-index: ${theme.elevation};
  overflow: hidden;
`;

 const TimeItemList = styled.div`
    overflow: auto;
    width: 100%;
    height: 100%;
 `;

const TimeItem = styled.div.attrs(() => ({
  'data-test-id': 'TIME_SELECTOR_DROPDOWN_ITEM',
}))`
  padding: ${theme.itemPadding};
  cursor: pointer;
  ${({ isSelected }) => isSelected && `background: ${theme.itemSelectedBackground} !important;`}
  ${({ isSelected }) => isSelected && `font-weight: ${theme.itemSelectedFontWeight};`}
  height: ${theme.itemHeight};

  :hover {
    background: ${theme.itemHoverBackground};
  }
`;

export { Container, TimeItemList, TimeItem };
