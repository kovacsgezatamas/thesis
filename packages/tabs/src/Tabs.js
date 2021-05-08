import React from 'react';

import * as Styled from './Tabs.styled';

function Tabs({ children, ...restProps }) {
  return (
    <Styled.Container {...restProps}>
      {children}
    </Styled.Container>
  );
}

export default Tabs;
