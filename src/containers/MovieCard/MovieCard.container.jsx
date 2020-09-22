import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MovieCard } from '../../patterns';

const MovieCardContainer = ({
  title,
  genres,
  rating,
  info,
  imgUrl,
  hoverable,
  renderHoverableContent,
  renderCoveringContent,
}) => {
  const [isShown, showCover] = useState(false);

  return (
    <MovieCard
      title={title}
      genres={genres}
      rating={rating}
      info={info}
      imgUrl={imgUrl}
      hoverable={hoverable}
      renderHoverableContent={renderHoverableContent}
      renderCoveringContent={renderCoveringContent}
      showCoveringContent={isShown}
      onShowCover={showCover}
    />
  );
};

MovieCardContainer.propTypes = {
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
  info: PropTypes.string.isRequired,
};

const renderDefaultContent = () => (<div />);

MovieCardContainer.defaultProps = {
  hoverable: false,
  renderHoverableContent: renderDefaultContent,
  renderCoveringContent: renderDefaultContent,
};

export default MovieCardContainer;
