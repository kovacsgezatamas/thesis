import styled from 'styled-components';
import { calendar as theme } from '@thesis-ui/theme';

const Container = styled.div.attrs(() => ({
  'data-test-id': 'MONTH_HEADER',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};
  border-bottom: ${theme.dayOfWeekBorderBottom};
  margin-bottom: ${theme.dayOfWeekMarginBottom};
  display: flex;
`;

const DayOfWeek = styled.div`
  width: ${theme.daySize};
  max-width: ${theme.daySize};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  font-weight: ${theme.dayOfWeekFontWeigth};
  color: ${theme.dayOfWeekColor};
  padding: ${theme.dayOfWeekPadding};
`;

export { Container, DayOfWeek };
