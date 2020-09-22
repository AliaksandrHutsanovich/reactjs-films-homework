import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import {
  SearchInput,
  HeadLine,
} from '../../../components';

import styles from '../FilmsPage.scss';

const { Header } = Layout;

const PageHeader = ({ onAction }) => (
  <Header className={styles.header}>
    <HeadLine text="FILMS" level={3} fontFamily="arial" />
    <SearchInput onSearch={onAction} />
  </Header>
);

PageHeader.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default memo(PageHeader);
