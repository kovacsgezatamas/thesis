import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePopper } from 'react-popper';

import * as Styled from './Tooltip.styled';

function Tooltip({ title, children, position, targetEl, onOpen, onClose, isAlwaysOpen, ...restProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: position,
    modifiers: [
      { name: 'offset', options: { offset: [0, 8] }},
    ],
  });

  function show() {
    setIsOpen(true);
  }

  function hide() {
    setIsOpen(false);
  }

  function renderChildren() {
    return React.Children.map(children || null, child => {
      return React.cloneElement(child, {
        ref: setReferenceElement
      })
    });
  }

  function renderTooltip() {
    return targetEl ?
      React.createPortal(
        <Styled.StaticTooltip
          ref={setPopperElement}
          {...restProps}
          style={styles.popper}
          {...attributes.popper}
        >
          {title}
        </Styled.StaticTooltip>,
        targetEl
      ) : (
        <Styled.StaticTooltip
          ref={setPopperElement}
          {...restProps}
          style={styles.popper}
          {...attributes.popper}
        >
          {title}
        </Styled.StaticTooltip>
      );
  }

  return (
    <>
      {renderChildren()}

      {(isAlwaysOpen || isOpen) && renderTooltip()}
    </>
  );
}

Tooltip.propTypes = {
  title: PropTypes.element.isRequired,
  children: PropTypes.element.isRequired,
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
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isAlwaysOpen: PropTypes.bool,
};

Tooltip.defaultProps = {
  position: 'top-start',
  targetEl: undefined,
  onOpen: undefined,
  onClose: undefined,
  isAlwaysOpen: false,
};

export default Tooltip;
