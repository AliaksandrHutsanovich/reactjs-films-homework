import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import {
  SearchInput,
  HeadLine,
} from '../../../components';

import styles from '../FilmsPage.scss';

const { Header } = Layout;

const PageHeader = ({
  onAction,
  withBackground,
  imgUrl,
}) => (
  <Header
    className={styles.header}
    style={{
      background: imgUrl && withBackground ? `url(${imgUrl}) no-repeat` : 'white',
    }}
  >
    <div className={styles.header__container}>
      <HeadLine text="FILMS" level={3} fontFamily="arial" />
      <SearchInput onSearch={onAction} />
    </div>
  </Header>
);

PageHeader.propTypes = {
  onAction: PropTypes.func.isRequired,
  withBackground: PropTypes.bool,
  imgUrl: PropTypes.string,
};

PageHeader.defaultProps = {
  withBackground: null,
  imgUrl: null,
};

export default memo(PageHeader);
