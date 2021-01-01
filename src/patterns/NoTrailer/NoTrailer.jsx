import React, { memo } from 'react';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import { Text } from '../../components';

import styles from './NoTrailer.scss';

const NoTrailer = () => (
  <div className={styles.wrapper}>
    <Text type="white" size={20}>No Trailer</Text>
  </div>
);

export default memo(NoTrailer);
