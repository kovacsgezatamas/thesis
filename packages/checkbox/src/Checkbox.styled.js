import styled, { css } from 'styled-components';

import { checkbox as theme } from '@thesis-ui/theme';

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

function getInsideIcon({ isChecked, isIndeterminate, hasError }) {
  if (isChecked) {
    return css`
      &:before, &:after {
        position: absolute;
        content: '';
        height: ${theme.checkIconTickness};
        background: ${hasError ? theme.errorCheckColor : theme.checkColor};
      }

      &:before {
        top: 13px;
        left: 0;
        transform: rotate(45deg);
        width: ${theme.checkIconLegWidth};
      }

      &:after {
        top: 8px;
        left: 4px;
        transform: rotate(315deg);
        width: ${theme.checkIconLongWidth};
      }
    `;
  }

  if (isIndeterminate) {
    return css`
      &:before {
        position: relative;
        content: '';
        width: ${theme.indeterminateIconWidth};
        height: ${theme.indeterminateIconTickness};
        background: ${theme.indeterminateColor};
      }
    `;
  }

  return undefined;
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: ${({ isDisabled }) => isDisabled ? 'default' : 'pointer'};
  width: ${theme.size};
  height: ${theme.size};
  border-radius: ${theme.borderRadius};
  margin-right: ${theme.marginRight};
  border: ${getBorder};
  background: ${getBackground};
  ${getInsideIcon};
`;

export { Container };
