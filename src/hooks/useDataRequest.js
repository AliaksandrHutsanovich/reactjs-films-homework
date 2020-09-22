import { useSelector } from 'react-redux';
import { useRequests } from 'redux-query-react';
import { moviesRequest, getImmutableItemsSelector } from '../modules/moviesRequest.module';
import { REQUEST_TYPES } from '../constants';

const useDataRequest = (type, query, page) => {
  const [{ isFinished }] = useRequests(
    [moviesRequest(REQUEST_TYPES.GENRES), moviesRequest(type, query, page)],
  );
  const items = useSelector(getImmutableItemsSelector(type, page));
  return {
    items,
    isFinished,
  };
};

export default useDataRequest;
