import styled from 'styled-components';

import { loader as theme } from '@thesis-ui/theme';

const Container = styled.div`
  height: ${({ isSmall }) => isSmall ? theme.smallSize : theme.size};
  padding: ${theme.padding};
  border: ${theme.border};
  border-radius: ${theme.borderRadius};
  background: ${theme.background};
  overflow: hidden;
`;

const ProgressBar = styled.div.attrs(({ progress }) => ({
  'data-test-id': 'LOADER_PROGRESS_BAR',
  style: {
    width: `${progress}%`,
  }
}))`
  height: 100%;
  max-width: 100%;
  background: ${theme.progressBackground};
  border-radius: ${theme.borderRadius};
  transition: width 500ms ease;
`;

export { Container, ProgressBar };
