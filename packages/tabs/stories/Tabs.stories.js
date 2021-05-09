import React from 'react';

import Tabs, { Tab } from '../src';

import TabsHelper from './styled/TabsHelper';

export default {
  title: 'Components/Tabs',
  component: Tabs,
};

const Template = (args) => (
  <TabsHelper>
    <Tabs isStreched={args.areTabsStreched}>
      <Tab isSelected={args.isFirstSelected}>First</Tab>
      <Tab isMultiline={args.isSecondMultiline}>
        {args.secondText}
      </Tab>
      <Tab isDisabled={args.isThirdDisabled}>Disabled</Tab>
      <Tab>Normal tab</Tab>
      <Tab isMultiline={args.isFifthMultiline}>Single line tab with a long text as content...</Tab>
    </Tabs>
  </TabsHelper>
);

export const TabsComponent = Template.bind({});
TabsComponent.args = {
  areTabsStreched: false,
  isFirstSelected: true,
  isThirdDisabled: true,
  isFifthMultiline: false,
  secondText: 'Second with a long text...',
};

export const Streched = Template.bind({});
Streched.args = {
  areTabsStreched: true,
  isFirstSelected: true,
  isSecondMultiline: true,
  isThirdDisabled: true,
  isFifthMultiline: false,
  secondText: 'Second with a long text, a loong text...',
};
