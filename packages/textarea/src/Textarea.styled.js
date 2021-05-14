import styled from 'styled-components';

import { textarea as theme } from '@thesis-ui/theme';

function getBorderStyle({ disabled, hasError }) {
  if (hasError) {
    return theme.errorBorder;
  }

  if (disabled) {
    return theme.disabledBorder;
  }

  return theme.border;
}

function getBackgroundStyle({ disabled, hasError }) {
  if (hasError) {
    return theme.errorBackground;
  }

  if (disabled) {
    return theme.disabledBackground;
  }

  return theme.background;
}

function getColor({ disabled, hasError }) {
  if (hasError) {
    return theme.errorColor;
  }

  if (disabled) {
    return theme.disabledColor;
  }

  return theme.color;
}

const Textarea = styled.textarea`
  box-sizing: border-box;
  outline: none;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  padding: ${theme.padding};
  border: ${getBorderStyle};
  background: ${getBackgroundStyle};
  color: ${getColor};
  border-radius: ${theme.borderRadius};
  resize: ${({ resize }) => resize};
`;

export { Textarea };
