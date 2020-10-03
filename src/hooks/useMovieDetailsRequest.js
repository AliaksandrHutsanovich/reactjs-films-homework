import { useSelector } from 'react-redux';
import { useRequests } from 'redux-query-react';
import { movieDetailsRequest } from '../modules/movieDetailsRequest.module';
import { moviesRequest, getImmutableByIdSelector } from '../modules/moviesRequest.module';
import { REQUEST_TYPES } from '../constants';

const useMovieDetailsRequest = (id) => {
  const [{ isFinished }] = useRequests(
    [moviesRequest(REQUEST_TYPES.GENRES), movieDetailsRequest(id)],
  );
  const item = useSelector(getImmutableByIdSelector(REQUEST_TYPES.SEARCH))[id];
  return {
    item,
    isFinished,
  };
};

export default useMovieDetailsRequest;
