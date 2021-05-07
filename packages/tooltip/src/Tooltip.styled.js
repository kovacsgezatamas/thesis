import styled from 'styled-components';

import { tooltip as theme } from '@thesis-ui/theme';

const Container = styled.div`
`;

const Addition = styled.div`
`;

const StaticTooltip = styled.div`
  font-family: ${theme.fontFamily};
  font-size: ${theme.fontSize};
  line-height: ${theme.lineHeight};

  background: ${theme.background};
  color: ${theme.color};

  padding: ${theme.padding};
  width: ${theme.width};
  max-height: ${theme.maxHeight};
  border-radius: ${theme.borderRadius};
  overflow: auto;
`;

StaticTooltip.displayName = 'StaticTooltip';

export { Container, Addition, StaticTooltip };
