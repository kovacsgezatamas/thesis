import styled from 'styled-components';

import { button as theme } from '@thesis-ui/theme';

const Button = styled.button.attrs(() => ({
  'data-test-id': 'BUTTON',
}))`
  font-family: ${theme.fontFamily};
  font-size: ${({ isSmall }) => isSmall ? theme.smallFontSize : theme.largeFontSize};
  line-height: ${theme.lineHeight};
  border-radius: ${theme.borderRadius};
  padding: ${({ isSmall }) => isSmall ? theme.smallPadding : theme.largePadding};
  color: ${({ isSecondary }) => isSecondary ? theme.secondaryColor : theme.primaryColor};
  background: ${({ isSecondary }) => isSecondary ? theme.secondaryBackground : theme.primaryBackground};
  border: ${theme.border};
  cursor: ${({ disabled }) => disabled ? 'auto' : 'pointer'};
  transition: background-color 150ms ease-in-out, color 150ms ease-in-out;
  outline: none;
  height: ${({ isSmall }) => isSmall ? '28px' : '36px'};

  :hover {
    color: ${({ isSecondary }) => isSecondary ? theme.secondaryHoverColor : theme.primaryHoverColor};
    background: ${({ isSecondary }) => isSecondary ? theme.secondaryHoverBackground : theme.primaryHoverBackground};
  }

  [disabled],:disabled {
    color: ${({ isSecondary }) => isSecondary ? theme.secondaryDisabledColor : theme.primaryDisabledColor};
    background: ${({ isSecondary }) => isSecondary ? theme.secondaryDisabledBackground : theme.primaryDisabledBackground};
  }
`;

export { Button };
