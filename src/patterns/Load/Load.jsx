/* eslint react/self-closing-comp: 0 */
import React, { memo } from 'react';
import { Text } from '../../components';

import styles from './Load.scss';

const Load = () => (
  <div className={styles.wrapper}>
    <ul className={styles.wrapper__list}>
      <li><div className={styles.wrapper__list_item}></div></li>
      <li><div className={styles.wrapper__list_item}></div></li>
      <li><div className={styles.wrapper__list_item}></div></li>
    </ul>
    <Text type="normal">LOADING</Text>
  </div>
);

export default memo(Load);
