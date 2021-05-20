import styled, { css } from 'styled-components';
import { calendar as theme } from '@thesis-ui/theme';

const Container = styled.div.attrs(() => ({
  'data-test-id': 'CALENDAR',
}))`
  display: flex;
  flex-direction: column;
  background: ${theme.background};
`;

const Navigation = styled.div`
  position: relative;
`;

const Arrow = styled.em`
  border: solid ${theme.navigationArrowColor};
  border-width: 0 ${theme.navigationArrowSize} ${theme.navigationArrowSize} 0 !important;
  display: inline-block;
  padding: ${theme.navigationArrowSize};
  cursor: pointer;
  position: absolute;
  top: 10px;

  :hover {
    border: solid ${theme.navigationArrowHoverColor};
  }
`;

const PrevMonth = styled(Arrow).attrs(() => ({
  'data-test-id': 'CALENDAR_PREV_MONTH',
}))`
  transform: rotate(135deg);
  left: 0;
`;

const NextMonth = styled(Arrow).attrs(() => ({
  'data-test-id': 'CALENDAR_PREV_MONTH',
}))`
  transform: rotate(-45deg);
  right: 0;
`;

const Content = styled.div.attrs(() => ({
  'data-test-id': 'CALENDAR_CONTENT',
}))`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.monthsGap};
`;

export {
  Container,
  Navigation,
  PrevMonth,
  NextMonth,
  Content,
};
