import React, { useState } from 'react';
import styled from 'styled-components';

const ModalHelperContainer = styled.div`
  width: 580px;
  height: 300px;
`;

function ModalHelper({ children }) {
  const [containerRef, setContainerRef] = useState(null);

  return (
    <ModalHelperContainer ref={setContainerRef}>
      {containerRef && children({ helperRef: containerRef })}
    </ModalHelperContainer>
  );
}

const ModalContent = styled.div`
  flex: 1 1;
  padding: 10px 24px;
  font-size: 14px;
`;

ModalContent.displayName = 'ModalContent';

export default ModalHelper;

export { ModalContent };
