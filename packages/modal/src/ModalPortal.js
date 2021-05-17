import React, { useEffect, useRef } from 'react';

import Backdrop from '@thesis-ui/backdrop';

import * as Styled from './Modal.styled';

const ESC_KEY_CODE = 27;

function ModalPortal({
  shouldCloseOnEsc,
  shouldCloseOnBackdropClick,
  staticWidth,
  staticHeight,
  onClose,
  children,
  ...restProps
}) {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.focus();
    }
  }, [contentRef]);

  function onContainerKeyDown(e) {
    if (shouldCloseOnEsc && e.keyCode === ESC_KEY_CODE) {
      onClose(e);
    }
  }

  function onBackdropClick(e) {
    if (shouldCloseOnBackdropClick) {
      onClose(e);
    }
  }

  return (
    <Styled.Container {...restProps}>
      <Backdrop
        onClick={onBackdropClick}
        onKeyDown={onContainerKeyDown}
        tabIndex="0"
      />

      <Styled.Content
        staticWidth={staticWidth}
        staticHeight={staticHeight}
        tabIndex="0"
        ref={contentRef}
      >
        {children}
      </Styled.Content>
    </Styled.Container>
  )
}

export default ModalPortal;
