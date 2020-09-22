import React from 'react';
import { MovieCardCover } from '../../../patterns';

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
    title={title}
    genres={genres}
    rating={rating}
    info={info}
    onClose={() => onOpen(false)}
    imgUrl={imgUrl}
    layoutClassName={styles.coveringContentWrapper}
    onDialogOpen={() => { handleOpen({ isOpen: true, title, id }); }}
  />
);

export default getRenderCoveringContent;
