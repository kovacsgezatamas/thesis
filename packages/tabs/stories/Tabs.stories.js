import React from 'react';

import Tabs, { Tab } from '../src';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => (
  <Tabs>
    <Tab isSelected={args.isFirstSelected}>First</Tab>
    <Tab isStretched={args.isSecondStreched}>
      {args.longText}
    </Tab>
    <Tab isDisabled={args.isThirdDisabled}>Disabled</Tab>
    <Tab>Normal tab</Tab>
  </Tabs>
);

export const TabsComponent = Template.bind({});
TabsComponent.args = {
  isFirstSelected: true,
  isSecondStreched: true,
  isThirdDisabled: true,
  longText: 'Second with a long text, a long-long text...',
};
