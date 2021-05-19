import React from 'react';

import Modal, { ModalHeader, ModalFooter } from '../src';
import Button from '../../button/src';

import ModalHelper, { ModalContent } from './styled/ModalHelper';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    onClose: { action: 'Modal onClose callback' },
   },
   parameters: {
    chromatic: { delay: 600 },
  },
};

const Template = ({ isVisible, onClose, ...args }) =>(
  <ModalHelper>
    {({ helperRef }) => (
      isVisible && (
        <Modal
          onClose={onClose}
          targetEl={helperRef}
          {...args}
        >
          <ModalHeader onClose={onClose}>
            Are you sure?
          </ModalHeader>

          <ModalContent>
            <p>
              You're about to delete <strong>Kovacs Geza-Tamas</strong> user.
            </p>
            <p>Are you sure you want to continue?</p>
          </ModalContent>

          <ModalFooter>
            <Button>Yes, delete</Button>
            <Button isSecondary>Cancel</Button>
          </ModalFooter>
        </Modal>
      )
    )}
  </ModalHelper>
);

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  isVisible: true,
  shouldCloseOnEsc: true,
  shouldCloseOnBackdropClick: true,
  staticWidth: '',
  staticHeight: '',
};
