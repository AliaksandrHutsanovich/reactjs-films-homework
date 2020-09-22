import React, { memo } from 'react';
import { Layout } from 'antd';
import { HeadLine, Text } from '../../../components';

import styles from '../FilmsPage.scss';

const { Footer } = Layout;

const PageFooter = () => (
  <Footer className={styles.footer}>
    <HeadLine text="FILMS" level={3} fontFamily="arial" type="blue" align="center" />
    <Text type="normal">Copyright © 2018 FILMS Sanderas</Text>
  </Footer>
);

export default memo(PageFooter);
