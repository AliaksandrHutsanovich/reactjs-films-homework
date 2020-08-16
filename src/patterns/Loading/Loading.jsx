import React from 'react';
import { motion } from 'framer-motion';

import { Text } from '../../components';

import styles from './Loading.scss';

const Loading = () => (
  <div className={styles.wrapper}>
    <ul className={styles.wrapper__list}>
      <motion.li
        className={styles.wrapper__list_item}
        animate={{
          scale: [1, 2, 1, 1, 2, 1, 1, 1],
        }}
        transition={{
          duration: 2,
          times: [0, 0.143, 0.286, 0.429, 0.572, 0.715, 0.858, 1],
          loop: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.li
        className={styles.wrapper__list_item}
        animate={{
          scale: [1, 1, 2, 1, 1, 2, 1, 1],
        }}
        transition={{
          duration: 2,
          times: [0, 0.143, 0.286, 0.429, 0.572, 0.715, 0.858, 1],
          loop: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.li
        className={styles.wrapper__list_item}
        animate={{
          scale: [1, 1, 1, 2, 1, 1, 2, 1],
        }}
        transition={{
          duration: 2,
          times: [0, 0.143, 0.286, 0.429, 0.572, 0.715, 0.858, 1],
          loop: Infinity,
          ease: 'easeInOut',
        }}
      />
    </ul>
    <Text type="normal">LOADING</Text>
  </div>
);

export default Loading;
