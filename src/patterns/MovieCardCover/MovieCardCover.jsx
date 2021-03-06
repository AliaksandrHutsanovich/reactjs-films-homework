import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import MovieInfoCard from '../MovieInfoCard';

const MovieCardCover = ({
  id,
  title,
  genres,
  rating,
  info,
  onClose,
  imgUrl,
  layoutClassName,
  onDialogOpen,
  onScrollInfo,
}) => (
  <Layout
    style={{
      background: `url(${imgUrl}) no-repeat`,
    }}
    className={layoutClassName}
  >
    <MovieInfoCard
      id={id}
      title={title}
      genres={genres}
      rating={rating}
      info={info}
      onClose={onClose}
      onDialogOpen={onDialogOpen}
      onScrollInfo={onScrollInfo}
    />
  </Layout>
);

MovieCardCover.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  imgUrl: PropTypes.string.isRequired,
  layoutClassName: PropTypes.string,
  onDialogOpen: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  onScrollInfo: PropTypes.func.isRequired,
};

MovieCardCover.defaultProps = {
  layoutClassName: '',
};

export default memo(MovieCardCover);
