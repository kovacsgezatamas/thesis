import styled, { css } from 'styled-components';
import { calendar as theme } from '@thesis-ui/theme';

function getDayStateStyles({ isWeekend, isInInterval }) {
  if (isInInterval) {
    return css`
      color: ${theme.daySelectedColor};
      background: ${theme.daySelectedBackground};
    `;
  }

  return css`
    color: ${isWeekend ? theme.dayWeekendColor : theme.dayColor};
    background: ${theme.dayBackground};
  `;
}

function getBorderRadius({ isIntervalStart, isIntervalEnd }, value) {
  let leftBorderRadius = '';
  let rightBorderRadius = '';

  if (isIntervalStart) {
    leftBorderRadius = `
      border-top-left-radius: ${value};
      border-bottom-left-radius: ${value};
    `;
  }

  if (isIntervalEnd) {
    rightBorderRadius = `
      border-top-right-radius: ${value};
      border-bottom-right-radius: ${value};
    `;
  }

  return css`
    ${leftBorderRadius}
    ${rightBorderRadius}
  `;
}

function getSpacing({ isIntervalStart, isIntervalEnd }) {
  const rightSpacing = isIntervalEnd ?
    `border-right: 4px solid ${theme.background}` :
    'padding-right: 4px';
  const leftSpacing = isIntervalStart ?
    `border-left: 4px solid ${theme.background}` :
    'padding-left: 4px';

  return css`
    border-top: 4px solid ${theme.background};
    border-bottom: 4px solid ${theme.background};
    ${rightSpacing};
    ${leftSpacing};
  `;
}

const Container = styled.div.attrs(() => ({
  'data-test-id': 'DAY',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  font-weight: ${({ isToday }) => isToday ? theme.todayFontWeight : theme.dayFontWeight};
  width: ${theme.daySize};
  height: ${theme.daySize};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  user-select: none;
  ${getDayStateStyles};
  ${getBorderRadius};
  ${props => getBorderRadius(props, theme.dayBorderRadius)};
  ${getSpacing};

  &:after {
    display: ${({ isToday }) => isToday ? 'block' : 'none'};
    content: "";
    position: absolute;
    bottom: 3px;
    left: 9px;
    width: calc(100% - 18px);
    height: ${theme.dayTodayHeight};
    background: ${({ isInInterval }) => isInInterval ? theme.todaySelectedColor : theme.todayColor};
    border-radius: ${theme.todayBorderRadius};
  }
`;

const Highlight = styled.div`
  position: absolute;
  top: -3px;
  left: ${({ isSelectionStart }) => isSelectionStart ? '-4px' : '0'};
  border-top: ${theme.dayHighlightBorder};
  border-bottom: ${theme.dayHighlightBorder};
  width: ${theme.daySize};
  height: calc(${theme.daySize} - 1.5px);
  z-index: 2;
  ${({ isIntervalStart }) => isIntervalStart ? `border-left: ${theme.dayHighlightBorder}` : ''};
  ${({ isIntervalEnd }) => isIntervalEnd ? `border-right: ${theme.dayHighlightBorder}` : ''};
  ${props => getBorderRadius(props, theme.dayHighlightBorderRadius)};
`;

export { Container, Highlight }
