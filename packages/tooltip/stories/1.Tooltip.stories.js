import React from 'react';

import Tooltip from '../src';
import Button from '../../button/src';

import TooltipHelper from './styled/TooltipHelper';
import { SAMPLE_SHORT_TEXT } from '../../../.storybook/constants';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    onShow: { action: 'Tooltip onShow callback' },
    onHide: { action: 'Tooltip onHide callback' },
  },
  parameters: {
    chromatic: { delay: 600 },
  },
};

const TooltipTemplate = (args) => (
  <TooltipHelper>
    <Tooltip {...args}>
      <Button>Save</Button>
    </Tooltip>
  </TooltipHelper>
);

export const Component = TooltipTemplate.bind({});
Component.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
};

export const Open = TooltipTemplate.bind({});
Open.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
  isAlwaysOpen: true,
};

export const BottomOpen = TooltipTemplate.bind({});
BottomOpen.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
  isAlwaysOpen: true,
  position: 'bottom',
};
