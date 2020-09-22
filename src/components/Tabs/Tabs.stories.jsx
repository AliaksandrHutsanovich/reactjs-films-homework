import React from 'react';
import Tabs from './Tabs';

export default {
  component: Tabs,
  title: 'components/Tabs',
};

const renderItem = (content) => (
  <p>
    {content}
  </p>
);

const tabsConfig = [
  {
    key: '1',
    renderItemChildren: renderItem,
    tabTitle: 'Tab 1',
    children: 'This is content of tab 1',
  }, {
    key: '2',
    renderItemChildren: renderItem,
    tabTitle: 'Tab 2',
    children: 'This is content of tab 2',
  }, {
    key: '3',
    renderItemChildren: renderItem,
    tabTitle: 'Tab 3',
    children: 'This is content of tab 3',
  },
];

export const tabsExample = () => (
  <Tabs
    tabsConfig={tabsConfig}
    defaultActiveKey="1"
    tabBarExtraContent={<p>This is extra content</p>}
    tabBarGutter={10}
    tabPosition="top"
  />
);
