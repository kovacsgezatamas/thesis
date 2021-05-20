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

const DayContainer = styled.div.attrs(() => ({
  'data-test-id': 'DAY',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  width: ${theme.daySize};
  height: ${theme.daySize};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${getDayStateStyles};
  ${getBorderRadius};

  &:after {
    display: ${({ isToday }) => isToday ? 'block' : 'none'};
    content: "";
    position: absolute;
    bottom: 4px;
    left: 6px;
    width: calc(100% - 12px);
    height: ${theme.dayTodayHeight};
    background: ${({ isSelected }) => isSelected ? theme.todaySelectedColor : theme.todayColor};
    border-radius: ${theme.todayBorderRadius};
  }
`;

export { DayContainer }
