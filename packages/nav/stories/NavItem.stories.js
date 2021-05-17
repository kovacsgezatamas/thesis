import React from 'react';

import { NavItem } from '../src';
import { NavItemHelper } from './styled/NavHelper';
import { SAMPLE_LONG_TEXT } from '../../../.storybook/constants';

export default {
  title: 'Components/Nav/NavItem',
  component: NavItem,
};

const NavItemTemplate = (args) => (
  <NavItemHelper>
    <NavItem {...args} />
  </NavItemHelper>
);

export const NavItemComponent = NavItemTemplate.bind({});
NavItemComponent.args = {
  children: 'Normal item',
};

export const WithEllipsis = NavItemTemplate.bind({});
WithEllipsis.args = {
  children: SAMPLE_LONG_TEXT,
};

export const Selected = NavItemTemplate.bind({});
Selected.args = {
  children: 'Selected item',
  isSelected: true,
};

export const Disabled = NavItemTemplate.bind({});
Disabled.args = {
  children: 'Disabled item',
  isDisabled: true,
};
