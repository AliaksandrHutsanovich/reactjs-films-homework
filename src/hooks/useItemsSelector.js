import { useSelector, shallowEqual } from 'react-redux';
import {
  getImmutableByIdSelector,
  searchValueModuleSelector,
  filterByGenreModuleSelector,
  getTotalPagesSelector,
} from '../modules/moviesRequest.module';

const useItemsSelector = (type) => {
  const items = useSelector(getImmutableByIdSelector(type));
  return items;
};

export const useSearchEntitiesSelector = () => {
  const searchValue = useSelector(searchValueModuleSelector);
  return searchValue;
};

export const useFilterByGenreEntitiesSelector = () => {
  const filterValue = useSelector(filterByGenreModuleSelector);
  return filterValue;
};

export const useTotalPagesSelector = (type) => {
  const totalPages = useSelector(getTotalPagesSelector(type), shallowEqual);
  return totalPages;
};

export default useItemsSelector;
