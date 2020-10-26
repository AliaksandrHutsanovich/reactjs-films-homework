import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Layout } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import renderTitle from './utils/renderTitle';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import MovieDescription from '../MovieDescription';
import { Text, Button } from '../../components';

import styles from './MovieInfoCard.scss';

const { Meta } = Card;

const MovieInfoCard = ({
  id,
  title,
  genres,
  rating,
  info,
  onClose,
  onDialogOpen,
  onScrollInfo,
}) => (
  <Card className={styles.card}>
    <Meta
      description={(
        <Layout className={styles.card__content}>
          <CloseOutlined
            onClick={onClose}
            className={styles.icon}
          />
          <MovieDescription
            id={id}
            title={title}
            genres={genres}
            rating={rating}
            ratingFontType="bordered"
            titleFontType="white"
            renderTitle={renderTitle}
          />
          <Layout
            className={styles.card__textWrapper}
            onScroll={onScrollInfo}
          >
            <Text type="white" size={12}>
              {info}
            </Text>
          </Layout>
          <Button
            title="Watch Now"
            onClick={onDialogOpen}
          />
        </Layout>
      )}
    />
  </Card>
);

MovieInfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  info: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onDialogOpen: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onScrollInfo: PropTypes.func.isRequired,
};

MovieInfoCard.defaultProps = {
  info: 'No description about movie',
};

export default memo(MovieInfoCard);
