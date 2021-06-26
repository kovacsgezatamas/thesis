# Modal component - Thesis UI

<br />

## Installation

```sh
$ yarn add @thesis-ui/modal
$ npm install @thesis-ui/modal
```

<br />

## Usage

```jsx
import Modal, { ModalHeader, ModalFooter } from '@thesis-ui/modal';
import Button from '@thesis-ui/button';

<Modal
  onClose={onClose}
>
  <ModalHeader onClose={onClose}>
    Are you sure?
  </ModalHeader>

  <div>
    <p>
      You're about to remove <strong>Kovacs Geza-Tamas</strong> user.
    </p>
    <p>Are you sure you want to proceed?</p>
  </div>

  <ModalFooter>
    <Button>Yes, remove</Button>
    <Button isSecondary>Cancel</Button>
  </ModalFooter>
</Modal>
```
