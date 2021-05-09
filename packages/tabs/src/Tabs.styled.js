import styled, { css } from 'styled-components';
import { tabs as theme } from '@thesis-ui/theme';

function getButtonCursor({ isSelected, isDisabled }) {
  if (isSelected || isDisabled) {
    return 'auto';
  }

  return 'pointer';
}

function getButtonBackground({ isSelected, isDisabled }) {
  if (isSelected) {
    return theme.selectedButtonBackground;
  }

  if (isDisabled) {
    return theme.disabledButtonBackground;
  }

  return theme.buttonBackground;
}

function getButtonColor({ isSelected, isDisabled }) {
  if (isSelected) {
    return theme.selectedButtonColor;
  }

  if (isDisabled) {
    return theme.disabledButtonColor;
  }

  return theme.buttonColor;
}


const TabButton = styled.button.attrs(() => ({
  'data-test-id': 'TAB_BUTTON',
}))`
  border: 0 none;
  outline: none;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  font-weight: ${theme.fontWeight};
  cursor: ${getButtonCursor};
  background: ${getButtonBackground};
  color: ${getButtonColor};
  padding: ${theme.buttonPadding};
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${({ isMultiline }) => isMultiline ? 'normal' : 'nowrap'};

  &:after {
    display: block;
    opacity: ${({ isSelected }) => isSelected ? 1 : 0};
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${theme.selectionLineHeight};
    background: ${theme.selectionLineColor};
    transition: opacity 150ms ease-in;
  }
`;

const Container = styled.div.attrs(() => ({
  'data-test-id': 'TABS_CONTAINER',
}))`
  display: flex;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: auto;
  padding: ${theme.containerPadding};
  background: ${theme.containerBackground};
  border-bottom: ${theme.containerBorderBottom};

  ${TabButton} {
    ${({ isStreched }) => isStreched ?css `
      align-items: stretch;
      width: 100%
    `: ''}
  }
`;

export { Container, TabButton };
