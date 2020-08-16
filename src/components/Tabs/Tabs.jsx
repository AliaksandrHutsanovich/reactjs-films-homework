import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Tabs as AntdTabs } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

const { TabPane } = AntdTabs;

const Tabs = ({
  tabsConfig,
  animated,
  defaultActiveKey,
  size,
  centered,
  tabBarExtraContent,
  tabBarGutter,
  tabBarStyle,
  onTabClick,
}) => {
  const tabPanes = useMemo(
    () => tabsConfig.map(
      ({
        key,
        renderItemChildren,
        tabTitle,
        children,
      }) => (
        <TabPane key={key} tab={tabTitle}>{renderItemChildren(children)}</TabPane>
      ),
    ),
    [tabsConfig], // it is possible that we need to have additional optimization
  );

  return (
    <AntdTabs
      animated={animated}
      defaultActiveKey={defaultActiveKey}
      size={size}
      centered={centered}
      tabBarExtraContent={tabBarExtraContent}
      tabBarGutter={tabBarGutter}
      tabBarStyle={tabBarStyle}
      onTabClick={onTabClick}
    >
      {tabPanes}
    </AntdTabs>
  );
};

Tabs.propTypes = {
  tabsConfig: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      renderItemChildren: PropTypes.func,
      tabTitle: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
      ]),
    }),
  ).isRequired,
  animated: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      inkBar: PropTypes.bool,
      tabPane: PropTypes.bool,
    }),
  ]),
  defaultActiveKey: PropTypes.string,
  size: PropTypes.oneOf([
    'large',
    'default',
    'small',
  ]),
  centered: PropTypes.bool,
  tabBarExtraContent: PropTypes.node,
  tabBarGutter: PropTypes.number.isRequired,
  tabBarStyle: PropTypes.shape({}),
  onTabClick: PropTypes.func,
};

Tabs.defaultProps = {
  animated: false,
  defaultActiveKey: '0',
  size: 'default',
  centered: false,
  tabBarExtraContent: null,
  tabBarStyle: {},
  onTabClick: null,
};

export default memo(Tabs);
