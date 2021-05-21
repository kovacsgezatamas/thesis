import React, { useRef } from 'react';
import useEventListener from '@use-it/event-listener';

import * as Styled from './Tooltip.styled';

const TooltipPopper = React.forwardRef(
  ({ children, triggerRef, onOutsideClick, ...restProps }, ref) => {
    const rootElRef = useRef(null);

    useEventListener('click', ({ target }) => {
      if (!rootElRef.current || !triggerRef) {
        return;
      }

      if (
        rootElRef.current.contains(target) ||
        rootElRef.current === target ||
        triggerRef.contains(target) ||
        target === triggerRef
      ) {
        return;
      }

      onOutsideClick();
    });

    const setRootElRef = rootRef => {
      rootElRef.current = rootRef;
      ref(rootRef);
    }

    return (
      <Styled.StaticTooltip
        ref={setRootElRef}
        {...restProps}
      >
        {children}
      </Styled.StaticTooltip>
    );
  }
);

export default TooltipPopper;
