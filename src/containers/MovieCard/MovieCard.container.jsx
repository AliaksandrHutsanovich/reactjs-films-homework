import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { REQUEST_TYPES } from '../../constants';
import { MovieCard } from '../../patterns';
import {
  useItemsSelector,
} from '../../hooks';

const MovieCardContainer = ({
  title,
  genresIds,
  rating,
  info,
  imgUrl,
  hoverable,
  renderHoverableContent,
  renderCoveringContent,
  id,
}) => {
  const [isShown, showCover] = useState(false);

  const genresById = useItemsSelector(REQUEST_TYPES.GENRES);

  return Object.keys(genresById).length ? (
    <MovieCard
      title={title}
      genres={genresIds.map((itemId) => (genresById[itemId].name))}
      rating={rating}
      info={info}
      imgUrl={imgUrl}
      hoverable={hoverable}
      renderHoverableContent={renderHoverableContent}
      renderCoveringContent={renderCoveringContent}
      showCoveringContent={isShown}
      onShowCover={showCover}
      id={id}
    />
  ) : null;
};

MovieCardContainer.propTypes = {
  title: PropTypes.string.isRequired,
  genresIds: PropTypes.arrayOf(
    PropTypes.number,
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
  id: PropTypes.number.isRequired,
};

const renderDefaultContent = () => (<div />);

MovieCardContainer.defaultProps = {
  hoverable: false,
  renderHoverableContent: renderDefaultContent,
  renderCoveringContent: renderDefaultContent,
};

export default MovieCardContainer;
