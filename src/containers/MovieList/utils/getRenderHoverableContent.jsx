import React from 'react';
import { PlayButton } from '../../../patterns';
import { Button } from '../../../components';

import styles from '../MovieList.container.scss';

const getRenderHoverableContent = (title, id, handleOpen) => (onOpenInfo) => (
  <div className={styles.hoverableContentWrapper}>
    <PlayButton onClick={() => { handleOpen({ isOpen: true, title, id }); }} />
    <Button title="View Info" onClick={() => onOpenInfo(true)} />
  </div>
);

export default getRenderHoverableContent;
