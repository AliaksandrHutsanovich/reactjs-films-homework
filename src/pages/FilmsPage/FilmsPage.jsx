import React, {
  memo,
} from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { MainInfoSection, PageHeader } from '../../containers';
import MoviesSection from './MoviesSection';
import PageFooter from './PageFooter';
import ScrollerRefContext, { BackgroundProvider } from '../../contexts';

import styles from './FilmsPage.scss';

const FilmsPage = ({
  withBackground,
  scrollerRef,
  onSearch,
  onScroll,
  setRef,
}) => (
  <div
    className={styles.scroller}
    onScroll={onScroll}
    ref={setRef}
  >
    <Layout className={styles.wrapper}>
      <BackgroundProvider>
        <PageHeader
          onAction={onSearch}
          withBackground={withBackground}
        />
        <Switch>
          <Route path="/:id">
            <MainInfoSection />
          </Route>
        </Switch>
      </BackgroundProvider>
      <ScrollerRefContext.Provider value={scrollerRef}>
        <MoviesSection />
      </ScrollerRefContext.Provider>
      <PageFooter />
    </Layout>
  </div>
);

FilmsPage.propTypes = {
  withBackground: PropTypes.bool,
  scrollerRef: PropTypes.shape({}),
  onSearch: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  setRef: PropTypes.func.isRequired,
};

FilmsPage.defaultProps = {
  withBackground: null,
  scrollerRef: null,
};

export default memo(FilmsPage);
