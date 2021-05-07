import styled from 'styled-components';

import { textField as theme } from '@thesis-ui/theme';

function getBorderStyle({ isDisabled, hasError }) {
  if (hasError) {
    return theme.errorBorder;
  }

  if (isDisabled) {
    return theme.disabledBorder;
  }

  return theme.border;
}

function getBackgroundStyle({ isDisabled, hasError }) {
  if (hasError) {
    return theme.errorBackground;
  }

  if (isDisabled) {
    return theme.disabledBackground;
  }

  return theme.background;
}

function getColor({ isDisabled, hasError }) {
  if (hasError) {
    return theme.errorColor;
  }

  if (isDisabled) {
    return theme.disabledColor;
  }

  return theme.color;
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  border-radius: ${theme.borderRadius};

  border: ${getBorderStyle};
  background: ${getBackgroundStyle};
  color: ${getColor};

  height: ${({ isSmall }) => isSmall ? '32px' : '40px' };
`;

const Addition = styled.div`
  background: ${theme.additionBackground};
  color: ${theme.additionColor};
  display: flex;
  align-items: center;
  padding: ${theme.additionPadding};
`;

const Input = styled.input`
  border: 0 none;
  outline: none;
  flex: 1;
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  overflow: hidden;
  background: transparent;
  color: inherit;
  padding: ${theme.padding};
`;

export { Container, Addition, Input };
