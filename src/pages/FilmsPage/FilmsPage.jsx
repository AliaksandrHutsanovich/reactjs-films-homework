import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import PageHeader from './PageHeader';
import MainInfoSection from './MainInfoSection';
import MoviesSection from './MoviesSection';
import PageFooter from './PageFooter';
import { useSelectionOperation } from '../../hooks';
import { SEARCH_VALUE_SELECTOR_TITLE } from '../../constants';

import styles from './FilmsPage.scss';

const FilmsPage = ({ onAction }) => {
  const handleSearch = useSelectionOperation(SEARCH_VALUE_SELECTOR_TITLE);

  return (
    <Layout className={styles.wrapper}>
      <PageHeader onAction={handleSearch} />
      <MainInfoSection onAction={onAction} />
      <MoviesSection />
      <PageFooter />
    </Layout>
  );
};

FilmsPage.propTypes = {
  onAction: PropTypes.func.isRequired,
};

export default memo(FilmsPage);
