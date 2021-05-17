import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';

import TooltipPopper from './TooltipPopper';

function Tooltip({
  title,
  children,
  position,
  targetEl,
  onShow,
  onHide,
  isAlwaysOpen,
  shouldShowOnClick,
  ...restProps
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: position,
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] }},
    ],
  });

  function show() {
    if (isVisible) {
      return;
    }

    setIsVisible(true);

    if (onShow) {
      onShow();
    }
  }

  function hide() {
    if (!isVisible) {
      return;
    }

    setIsVisible(false);

    if (onHide) {
      onHide();
    }
  }

  function renderChildren() {
    let toggleEvents = {};

    if (!isAlwaysOpen) {
      toggleEvents = shouldShowOnClick ? {
        onClick: show,
      } : {
        onMouseEnter: show,
        onMouseLeave: hide,
      };
    }


    return React.Children.map(children || null, child =>
      React.cloneElement(child, {
        ref: setReferenceElement,
        ...toggleEvents,
      })
    );
  }

  function renderTooltip() {
    return targetEl ?
      React.createPortal(
        <TooltipPopper
          ref={setPopperElement}
          triggerRef={referenceElement}
          onOutsideClick={hide}
          {...restProps}
          style={styles.popper}
          {...attributes.popper}
        >
          {title}
        </TooltipPopper>,
        targetEl
      ) : (
        <TooltipPopper
          ref={setPopperElement}
          triggerRef={referenceElement}
          onOutsideClick={hide}
          {...restProps}
          style={styles.popper}
          {...attributes.popper}
        >
          {title}
        </TooltipPopper>
      );
  }

  return (
    <>
      {renderChildren()}

      {(isAlwaysOpen || isVisible) && renderTooltip()}
    </>
  );
}

Tooltip.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  targetEl: PropTypes.element,
  onShow: PropTypes.func,
  onHide: PropTypes.func,
  isAlwaysOpen: PropTypes.bool,
  shouldShowOnClick: PropTypes.bool,
};

Tooltip.defaultProps = {
  position: 'top-start',
  targetEl: undefined,
  onShow: undefined,
  onHide: undefined,
  isAlwaysOpen: false,
  shouldShowOnClick: false,
};

export default Tooltip;
