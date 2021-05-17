import styled from 'styled-components';

import { modal as theme } from '@thesis-ui/theme';


const ModalFooter = styled.div.attrs(() => ({
  'data-test-id': 'MODAL_FOOTER',
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: ${theme.footerPadding};
  border-top: ${theme.footerBorderTop};

  button {
    margin: ${theme.footerButtonMargin};
  }
`;

ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
