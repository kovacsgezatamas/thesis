import React from 'react';

import Backdrop from '../src';

import BackdropHelper, { BackdropSpinnerHelper } from './styled/BackdropHelper';
import Spinner from '../../spinner/src';

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
};

const Template = ({ isVisible }) =>(
  <BackdropHelper>
    <p>Any text</p>
    <p>Behind the Backdrop</p>

    {isVisible && <Backdrop />}
  </BackdropHelper>
);

export const BackdropComponent = Template.bind({});
BackdropComponent.args = {
  isVisible: true,
};

export const WithSpinner = () => (
  <BackdropHelper>
    <p>Other text</p>
    <p>Covered by the Backdrop</p>

    <Backdrop>
      <BackdropSpinnerHelper>
        <Spinner />
      </BackdropSpinnerHelper>
    </Backdrop>
  </BackdropHelper>
)
