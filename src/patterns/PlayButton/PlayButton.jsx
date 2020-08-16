import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { PlayCircleFilled } from '@ant-design/icons';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import { Text } from '../../components';

import styles from './PlayButton.scss';

const PlayButton = ({ onClick }) => (
  <div className={styles.wrapper}>
    <PlayCircleFilled onClick={onClick} className={styles.wrapper__icon} />
    <Text type="white" size={16}>Watch Now</Text>
  </div>
);

PlayButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(PlayButton);
