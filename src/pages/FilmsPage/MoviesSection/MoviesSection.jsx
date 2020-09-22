import React, { memo } from 'react';
import { Layout } from 'antd';
import { Tabs } from '../../../components';
import { MovieList, Filter } from '../../../containers';
import { REQUEST_TYPES } from '../../../constants';

import styles from './MoviesSection.scss';

export const renderTrending = () => (<MovieList type={REQUEST_TYPES.TRENDING} />);
export const renderTopRated = () => (<MovieList type={REQUEST_TYPES.TOP_RATED} />);
export const renderComingSoon = () => (<MovieList type={REQUEST_TYPES.COMING_SOON} />);

const tabsConfig = [
  {
    key: '1',
    renderItemChildren: renderTrending,
    tabTitle: 'Trending',
  }, {
    key: '2',
    renderItemChildren: renderTopRated,
    tabTitle: 'Top Rated',
  }, {
    key: '3',
    renderItemChildren: renderComingSoon,
    tabTitle: 'Coming Soon',
  },
];

const MoviesSection = () => (
  <Layout className={styles.wrapper}>
    <Tabs
      tabsConfig={tabsConfig}
      defaultActiveKey="1"
      tabBarExtraContent={<Filter />}
      tabBarGutter={15}
      tabPosition="top"
    />
  </Layout>
);

export default memo(MoviesSection);
