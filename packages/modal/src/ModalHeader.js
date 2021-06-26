import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Modal.styled';

function ModalHeader({
  children,
  onClose,
}) {
  return (
    <Styled.HeaderContainer>
      {children}

      {onClose && (
        <Styled.CloseIcon onClick={onClose}>
          X
        </Styled.CloseIcon>
      )}
    </Styled.HeaderContainer>
  );
}

ModalHeader.propTypes = {
  /**
   * Content to be rendered in the modal header
   */
  children: PropTypes.node,
  /**
   * Callback executed when the X icon is clicked.
   * <br />If the function is not present (is falsy) the X icon in Header is not visible
   */
  onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
  children: '',
  onClose: undefined,
};

export default ModalHeader;
