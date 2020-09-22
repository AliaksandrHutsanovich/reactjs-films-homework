import { useSelector } from 'react-redux';
import { getImmutableItemsSelector } from '../modules/moviesRequest.module';
import { REQUEST_TYPES } from '../constants';

const useGenresSelector = () => useSelector(getImmutableItemsSelector(REQUEST_TYPES.GENRES));

export default useGenresSelector;
