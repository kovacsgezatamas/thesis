import styled, { css } from 'styled-components';
import { calendar as theme } from '@thesis-ui/theme';

const Container = styled.div.attrs(() => ({
  'data-test-id': 'MONTH',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  display: flex;
  flex-direction: column;
  user-select: none;
  width: ${theme.monthWidth};
  background: ${theme.background};
`;

const MonthName = styled.div.attrs(() => ({
  'data-test-id': 'MONTH_NAME',
}))`
  text-align: center;
  font-weight: ${theme.monthNameFontWeigth};
  padding: ${theme.monthNamePadding};
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DayPlaceholder = styled.div.attrs(() => ({
  'data-test-id': 'MONTH_DAY_PLACEHOLDER',
}))`
  width: ${theme.daySize};
  height: ${theme.daySize};
`;

export { Container, MonthName, Content, DayPlaceholder };
