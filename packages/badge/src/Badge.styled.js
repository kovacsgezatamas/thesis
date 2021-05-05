import styled from 'styled-components';

import { badge as theme } from '@thesis-ui/theme';

import BADGE_POSITION from './constants';

function getPositioning({ isSmall, isInner, position = BADGE_POSITION.topRight }) {
  const size = parseInt(isSmall ? theme.smallSize : theme.size);
  const offset = `${isInner ? 0 : (size / 2)}px`;
  let horizontal = '';
  let vertical = '';

  if (
    position === BADGE_POSITION.topRight ||
    position === BADGE_POSITION.bottomRight
  ) {
    horizontal = `right: -${offset}`;
  }

  if (
    position === BADGE_POSITION.topLeft ||
    position === BADGE_POSITION.bottomLeft
  ) {
    horizontal = `left: -${offset}`;
  }

  if (
    position === BADGE_POSITION.topLeft ||
    position === BADGE_POSITION.topRight
  ) {
    vertical = `top: -${offset}`;
  }

  if (
    position === BADGE_POSITION.bottomLeft ||
    position === BADGE_POSITION.bottomRight
  ) {
    vertical = `bottom: -${offset}`;
  }

  return `
    ${horizontal};
    ${vertical};
  `;
}

const Badge = styled.div.attrs(() => ({
  'data-test-id': 'BADGE',
}))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  ${getPositioning};

  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};

  border-radius: ${({ isSmall }) => parseInt(isSmall ? theme.smallSize : theme.size, 10) / 2}px;
  height: ${({ isSmall }) => isSmall ? theme.smallSize : theme.size};
  min-width: ${({ isSmall }) => isSmall ? theme.smallSize : theme.size};
  padding: ${theme.padding};

  color: ${({ isSecondary }) => isSecondary ? theme.secondaryColor : theme.color};
  background: ${({ isSecondary }) => isSecondary ? theme.secondaryBackground : theme.background};
`;

export { Badge };
