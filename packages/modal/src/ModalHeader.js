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
  children: PropTypes.node,
  onClose: PropTypes.func,
};

ModalHeader.defaultProps = {
  children: '',
  onClose: undefined,
};

export default ModalHeader;
