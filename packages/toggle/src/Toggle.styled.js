import styled from 'styled-components';

import { toggle as theme } from '@thesis-ui/theme';

function getBorder({ isDisabled, hasError }) {
  if (hasError) {
    return theme.errorBorder;
  }

  if (isDisabled) {
    return theme.disabledBorder;
  }

  return theme.border;
}

function getBackground({ isDisabled }) {
  if (isDisabled) {
    return theme.disabledBackground;
  }

  return theme.background;
}

function getThumbBackground({ hasError, isChecked }) {
  if (hasError && isChecked) {
    return theme.thumbErrorColor;
  }

  if (isChecked) {
    return theme.thumbCheckedColor;
  }

  return theme.thumbColor;
}

const ToggleItem = styled.div.attrs(() => ({
  'data-test-id': 'TOGGLE',
}))`
  width: ${theme.width};
  height: ${theme.height};
  margin-right: ${theme.marginRight};

  border-radius: ${theme.borderRadius};
  border: ${getBorder};
  background: ${getBackground};
  position: relative;

  &:after {
    position: absolute;
    top: 2px;
    content: '';
    ${({ isChecked }) => isChecked ? 'left: 16px' : 'left: 2px'};
    width: ${theme.thumbSize};
    height: ${theme.thumbSize};
    border-radius: ${theme.thumbBorderRadius};
    background: ${getThumbBackground};
    transition: left 150ms ease-in-out
  }
`;

export { ToggleItem };
