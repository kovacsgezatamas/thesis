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

export const Component = Template.bind({});
Component.args = {
  isVisible: true,
};
Component.parameters = {
  chromatic: { delay: 1500 },
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
);
WithSpinner.parameters = {
  chromatic: { delay: 1500 },
};

