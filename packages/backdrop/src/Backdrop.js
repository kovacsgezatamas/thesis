import styled, { keyframes } from 'styled-components';

import { backdrop as theme } from '@thesis-ui/theme';

const animation = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: ${theme.opacity};
  }
`;

const Backdrop = styled.div.attrs(() => ({
  'data-test-id': 'BACKDROP',
}))`
  opacity: ${theme.opacity};
  background: ${theme.background};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  text-align: center;
  z-index: ${theme.elevation};
  animation: ${animation} 150ms ease-in;
`;

Backdrop.displayName = 'Backdrop';

export default Backdrop;
