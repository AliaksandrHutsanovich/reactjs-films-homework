import React, {
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useParams } from 'react-router-dom';
import { IMG_PATH_PREFIX } from '../../constants';
import MainInfoSection from '../../pages/FilmsPage/MainInfoSection';
import { useMovieDetailsRequest } from '../../hooks';
import { BackgroundContext } from '../../contexts';
import MovieDialog from '../MovieDialog';

import image from '../../assets/images/no-movie-poster.svg';

const MainInfoSectionContainer = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { setBackground } = useContext(BackgroundContext);
  const { id } = useParams();
  const { item } = useMovieDetailsRequest(id);
  const handleShowInfo = useCallback(() => {
    setShowInfo(!showInfo);
  }, [showInfo]);

  useEffect(() => {
    if (item) {
      setBackground(`${IMG_PATH_PREFIX}${item.backdrop_path}`);
    }
  }, [item, setBackground]);

  const handleCloseDialog = useCallback(() => setOpen(false), []);
  const handleOpenDialog = useCallback(() => setOpen(true), []);

  if (!item) return null;

  return (
    <>
      <MovieDialog
        isOpen={isOpen}
        title={item.title}
        onCancel={handleCloseDialog}
        movieId={id}
      />
      <MainInfoSection
        title={item.title}
        genres={item.genres}
        rating={item.vote_average / 2}
        imgUrl={item.backdrop_path ? `${IMG_PATH_PREFIX}${item.backdrop_path}` : image}
        info={item.overview}
        isInfoShown={showInfo}
        onShowInfo={handleShowInfo}
        onWatchNow={handleOpenDialog}
      />
    </>
  );
};

export default memo(MainInfoSectionContainer);
