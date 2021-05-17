import React from 'react';

import Nav, { NavItem } from '../src';
import NavHelper from './styled/NavHelper';

export default {
  title: 'Components/Nav',
  component: Nav,
};

const Template = (args) => (
  <NavHelper>
    <Nav>
      <NavItem>First item</NavItem>
      <NavItem>Second item</NavItem>
      <NavItem isSelected>Selected item</NavItem>
      <NavItem>Long item: here comes a long text, very long text...</NavItem>
      <NavItem isDisabled>Disabled item</NavItem>
      <NavItem>LastItem item</NavItem>
    </Nav>
  </NavHelper>
);

export const NavComponent = Template.bind({});
NavComponent.args = {
  isCollapsed: false,
};


export const Collapsed = Template.bind({});
NavComponent.args = {
  isCollapsed: true,
};
