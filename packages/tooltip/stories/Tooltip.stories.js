import React from 'react';

import Tooltip from '../src';
import Button from '../../button/src';

import TooltipHelper from './styled/TooltipHelper';
import { SAMPLE_LONG_TEXT, SAMPLE_SHORT_TEXT } from '../../../.storybook/constants';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  argTypes: {
    onShow: { action: 'Tooltip onShow callback' },
    onHide: { action: 'Tooltip onHide callback' },
   },
};

const TooltipTemplate = (args) => (
  <TooltipHelper>
    <Tooltip {...args}>
      <Button>Save</Button>
    </Tooltip>
  </TooltipHelper>
);

export const OpenTooltipComponent = TooltipTemplate.bind({});
OpenTooltipComponent.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
  isAlwaysOpen: true,
};

export const BottomOpenTooltipComponent = TooltipTemplate.bind({});
BottomOpenTooltipComponent.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
  isAlwaysOpen: true,
  position: 'bottom',
};

export const TooltipComponent = TooltipTemplate.bind({});
TooltipComponent.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
};
