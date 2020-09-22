import {
  moviesRequest,
  getImmutableIdsSelector,
  getImmutableByIdSelector,
  getImmutableItemsSelector,
  getTotalPagesSelector,
  searchValueModuleSelector,
  filterByGenreModuleSelector,
} from '../moviesRequest.module';
import {
  API_KEY,
  REQUEST_URLS,
  API_RESPONSE_DATA_FIELDS,
  SEARCH_VALUE_SELECTOR_TITLE,
  FILTER_BY_GENRE_SELECTOR_TITLE,
} from '../../constants';
import data from '../../__mocks__/items.mock';

describe('movies request module', () => {
  const type = 'search';
  const query = 'queen';
  const page = 1;
  const totalPages = 20;
  const searchValue = 'queen';
  const filterByGenreValue = 'cartoon';
  const queryConfig = moviesRequest(type, query, page);
  const transformedObject = queryConfig.transform({
    [API_RESPONSE_DATA_FIELDS[type]]: data,
    total_pages: totalPages,
  });
  const updatedStore = {
    entities: {
      [SEARCH_VALUE_SELECTOR_TITLE]: searchValue,
      [FILTER_BY_GENRE_SELECTOR_TITLE]: filterByGenreValue,
      ...queryConfig.update[type]({}, transformedObject),
    },
  };

  it('query moviesRequest should return query config', () => {
    expect(queryConfig).toEqual({
      queryKey: `${type}${query}${page}`,
      url: `/${REQUEST_URLS[type]}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}`,
      options: {
        method: 'GET',
      },
      transform: expect.any(Function),
      update: expect.any(Object),
    });
  });

  it('ids selector should return right object', () => {
    expect(getImmutableIdsSelector(type, page)(updatedStore))
      .toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('ids selector should return right object with default values', () => {
    expect(getImmutableIdsSelector(type)({}))
      .toEqual([]);
  });

  it('by id selector should return right object', () => {
    expect(getImmutableByIdSelector(type, page)(updatedStore))
      .toEqual({
        1: data[0],
        2: data[1],
        3: data[2],
        4: data[3],
        5: data[4],
        6: data[5],
        7: data[6],
      });
  });

  it('by id selector should return right object with default values', () => {
    expect(getImmutableByIdSelector(type)({}))
      .toEqual({});
  });

  it('items selector should return right object', () => {
    expect(getImmutableItemsSelector(type, page)(updatedStore))
      .toEqual(data);
  });

  it('items selector should return right object with default values', () => {
    expect(getImmutableItemsSelector(type)({}))
      .toEqual([]);
  });

  it('total pages selector should return total pages value', () => {
    expect(getTotalPagesSelector(type)(updatedStore)).toEqual(totalPages);
  });

  it('search value selector should return right value', () => {
    expect(searchValueModuleSelector(updatedStore)).toEqual(searchValue);
  });

  it('search value selector should return right value from empty store', () => {
    expect(searchValueModuleSelector({})).toEqual('');
  });

  it('filter by genre value selector should return right value', () => {
    expect(filterByGenreModuleSelector(updatedStore)).toEqual(filterByGenreValue);
  });
});
