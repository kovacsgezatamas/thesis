import styled, { css } from 'styled-components';
import { calendar as theme } from '@thesis-ui/theme';

function getDayStateStyles({ isWeekend, isSelected }) {
  if (isSelected) {
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

function getBorderRadius({ isSelectedStart, isSelectedEnd }) {
  const value = theme.dayBorderRadius;
  let leftBorderRadius = '';
  let rightBorderRadius = '';

  if (isSelectedStart) {
    leftBorderRadius = `
      border-top-left-radius: ${value};
      border-bottom-left-radius: ${value};
    `;
  }

  if (isSelectedEnd) {
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

function getSpacing({ isSelectedStart, isSelectedEnd }) {
  const rightSpacing = isSelectedEnd ?
    `border-right: 4px solid ${theme.background}` :
    'padding-right: 4px';
  const leftSpacing = isSelectedStart ?
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
  ${getSpacing};

  &:after {
    display: ${({ isToday }) => isToday ? 'block' : 'none'};
    content: "";
    position: absolute;
    bottom: 3px;
    left: 9px;
    width: calc(100% - 18px);
    height: ${theme.dayTodayHeight};
    background: ${({ isSelected }) => isSelected ? theme.todaySelectedColor : theme.todayColor};
    border-radius: ${theme.todayBorderRadius};
  }
`;

export { Container }
