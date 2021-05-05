import React from 'react';

import Badge, { BADGE_POSITION } from '../src';
import BadgeHelper from './styled/BadgeHelper';

export default {
  title: 'Components/Badge',
  component: Badge,
};

const Template = (args) => <BadgeHelper><Badge {...args} /></BadgeHelper>;

export const BadgeComponent = Template.bind({});
BadgeComponent.args = {
  children: '10',
};

export const PrimaryTopLeft = Template.bind({});
PrimaryTopLeft.args = {
  children: '11',
  position: BADGE_POSITION.topLeft
};

export const SecondaryBottomLeft = Template.bind({});
SecondaryBottomLeft.args = {
  children: '12',
  isSecondary: true,
  position: BADGE_POSITION.bottomLeft
};

export const SmallTopRight = Template.bind({});
SmallTopRight.args = {
  children: '12',
  isSmall: true,
  position: BADGE_POSITION.topRight
};

export const InnerBottomRight = Template.bind({});
InnerBottomRight.args = {
  children: '12',
  isInner: true,
  position: BADGE_POSITION.bottomRight
};
