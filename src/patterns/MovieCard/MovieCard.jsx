import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import MovieDescription from '../MovieDescription';

import styles from './MovieCard.scss';

const { Meta } = Card;

const MovieCard = ({
  title,
  genres,
  rating,
  imgUrl,
}) => (
  <Card
    className={styles.card}
    cover={<img alt="cardImg" src={imgUrl} className={styles.image} />}
  >
    <Meta
      description={(
        <MovieDescription
          title={title}
          genres={genres}
          rating={rating}
          ratingFontType="secondary_with_background"
        />
      )}
    />
  </Card>
);

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  imgUrl: PropTypes.string.isRequired,
};

export default memo(MovieCard); // additional memoization is possible
