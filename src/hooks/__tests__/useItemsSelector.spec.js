import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';
import useItemsSelector, {
  useSearchEntitiesSelector,
  useFilterByGenreEntitiesSelector,
  useTotalPagesSelector,
} from '../useItemsSelector';
import getTestProviderWrapper from '../../test-utils/getTestProviderWrapper';
import getTestInitialState from '../../test-utils/getTestInitialState';

const type = 'data';
const page = 1;
const searchValue = 'lop-top';
const filterByGenreValue = 'comedy';
const totalPages = 12;
const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
const mockStore = configureStore();
const initialState = getTestInitialState(type, data, searchValue, filterByGenreValue, totalPages);

describe('hooks', () => {
  const dataStore = mockStore({ entities: { ...initialState } });
  const wrapper = getTestProviderWrapper(dataStore);

  it('useItemsSelector should get items', () => {
    const { result } = renderHook(
      () => useItemsSelector(type, page),
      { wrapper },
    );

    expect(result.current).toEqual(
      data.reduce((res, d) => ({
        ...res,
        [d.id]: d,
      }), {}),
    );
  });

  it('useSearchEntitiesSelector should get search value', () => {
    const { result } = renderHook(
      () => useSearchEntitiesSelector(),
      { wrapper },
    );
    expect(result.current).toEqual(searchValue);
  });

  it('useFilterByGenreEntitiesSelector should get filterByGenre value', () => {
    const { result } = renderHook(
      () => useFilterByGenreEntitiesSelector(),
      { wrapper },
    );
    expect(result.current).toEqual(filterByGenreValue);
  });

  it('useTotalPagesSelector should return total pages value', () => {
    const { result } = renderHook(
      () => useTotalPagesSelector(type),
      { wrapper },
    );
    expect(result.current).toEqual(totalPages);
  });
});
