import React from 'react';

import { StaticTooltip } from '../src';

import { SAMPLE_LONG_TEXT, SAMPLE_SHORT_TEXT } from '../../../.storybook/constants';

export default {
  title: 'Components/Tooltip/StaticTooltip',
  component: StaticTooltip,
};

const StaticTooltipTemplate = (args) => <StaticTooltip {...args} />;

export const StaticTooltipComponent = StaticTooltipTemplate.bind({});
StaticTooltipComponent.args = {
  children: SAMPLE_SHORT_TEXT,
};

export const StaticLongText = StaticTooltipTemplate.bind({});
StaticLongText.args = {
  children: SAMPLE_LONG_TEXT,
};
