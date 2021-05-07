import React from 'react';

import Tooltip, { StaticTooltip } from '../src';
import Button from '../../button/src';

import TooltipHelper from './styled/TooltipHelper';
import { SAMPLE_LONG_TEXT, SAMPLE_SHORT_TEXT } from '../../../.storybook/constants';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
};

const StaticTooltipTemplate = (args) => <StaticTooltip {...args} />;

const TooltipTemplate = (args) => (
  <TooltipHelper>
    <Tooltip {...args}>
      <Button>Save</Button>
    </Tooltip>
  </TooltipHelper>
);

export const TooltipComponent = TooltipTemplate.bind({});
TooltipComponent.args = {
  title: SAMPLE_SHORT_TEXT.substr(0, 100),
  isAlwaysOpen: true,
};

export const StaticTooltipComponent = StaticTooltipTemplate.bind({});
StaticTooltipComponent.args = {
  children: SAMPLE_SHORT_TEXT,
};

export const StaticTooltipLongText = StaticTooltipTemplate.bind({});
StaticTooltipLongText.args = {
  children: SAMPLE_LONG_TEXT,
};
