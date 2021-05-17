import styled, { keyframes } from 'styled-components';

import { modal as theme } from '@thesis-ui/theme';

const Container = styled.div.attrs(() => ({
  'data-test-id': 'MODAL_CONATINER',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};

  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  outline: none;
`;

const Content = styled.div.attrs(() => ({
  'data-test-id': 'MODAL',
}))`
  width: ${({ staticWidth }) => (staticWidth || theme.width)};
  height: ${({ staticHeight }) => staticHeight};
  min-height: 200px;
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  background: ${theme.background};
  color: ${theme.color};
  z-index: ${theme.elevation};
  display: flex;
  flex-direction: column;
  outline: none;
`;

const HeaderContainer = styled.div.attrs(() => ({
  'data-test-id': 'MODAL_HEADER',
}))`
  font-size: ${theme.headerFontSize};
  font-weight: ${theme.headerFontWeight};
  color: ${theme.headerColor};
  padding: ${theme.headerPadding};
  border-bottom: ${theme.headerBorderBottom};
  position: relative;
`;

const CloseIcon = styled.span.attrs(() => ({
  'data-test-id': 'MODAL_HEADER_CLOSE_ICON',
}))`
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 16px;
  font-size: ${theme.headerCloseSize};
  font-weight: ${theme.headerCloseWeight};
`;

export {
  Container,
  Content,
  HeaderContainer,
  CloseIcon
};
