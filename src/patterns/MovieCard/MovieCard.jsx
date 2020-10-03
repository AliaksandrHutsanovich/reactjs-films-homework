import React, { memo } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Card } from 'antd';
import { Image } from '../../containers';

import '!style-loader!css-loader!sass-loader!antd/dist/antd.css'; //eslint-disable-line

import MovieDescription from '../MovieDescription';
import preload from '../../assets/images/preload.png';

import styles from './MovieCard.scss';

const { Meta } = Card;

const MovieCard = ({
  title,
  genres,
  rating,
  imgUrl,
  info,
  hoverable,
  renderHoverableContent,
  renderCoveringContent,
  showCoveringContent,
  onShowCover,
  id,
}) => (
  <Card
    className={clsx(styles.card, { [styles.hoverable]: hoverable && !showCoveringContent })}
    cover={(
      <div className={styles.imageWrapper}>
        <Image preload={preload} alt="cardImg" imgUrl={imgUrl} className={styles.image} spinClassName={styles.imageSpin} />
        <div className={styles.hoverableContentWrapper}>
          {renderHoverableContent(onShowCover)}
        </div>
      </div>
    )}
  >
    <Meta
      description={(
        <MovieDescription
          title={title}
          genres={genres}
          rating={rating}
          ratingFontType="bordered"
          id={id}
        />
      )}
    />
    <div
      className={clsx(
        styles.coveringContentWrapper,
        { [styles.showCover]: showCoveringContent },
      )}
    >
      {renderCoveringContent(
        title,
        genres,
        rating,
        info,
        onShowCover,
        imgUrl,
      )}
    </div>
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
  hoverable: PropTypes.bool,
  renderHoverableContent: PropTypes.func,
  renderCoveringContent: PropTypes.func,
  info: PropTypes.string,
  showCoveringContent: PropTypes.bool,
  onShowCover: PropTypes.func,
  id: PropTypes.number.isRequired,
};

export const renderDefaultContent = () => (<div />);

MovieCard.defaultProps = {
  hoverable: false,
  renderHoverableContent: renderDefaultContent,
  renderCoveringContent: renderDefaultContent,
  showCoveringContent: false,
  onShowCover: null,
  info: '',
};

export default memo(MovieCard); // additional memoization is possible
