import React from 'react';
import { MovieCardCover } from '../../../patterns';
import handleScrollToStopPropagation from '../../../utils/handlers';

import styles from '../MovieList.container.scss';

const getRenderCoveringContent = (id, handleOpen) => (
  title,
  genres,
  rating,
  info,
  onOpen,
  imgUrl,
) => (
  <MovieCardCover
    id={id}
    title={title}
    genres={genres}
    rating={rating}
    info={info}
    onClose={() => onOpen(false)}
    imgUrl={imgUrl}
    layoutClassName={styles.coveringContentWrapper}
    onDialogOpen={() => { handleOpen({ isOpen: true, title, id }); }}
    onScrollInfo={handleScrollToStopPropagation}
  />
);

export default getRenderCoveringContent;
