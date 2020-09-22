import { is } from 'immutable';
import { createSelectorCreator, defaultMemoize, createSelector } from 'reselect';
import {
  API_KEY,
  REQUEST_URLS,
  API_RESPONSE_DATA_FIELDS,
  SEARCH_VALUE_SELECTOR_TITLE,
  FILTER_BY_GENRE_SELECTOR_TITLE,
} from '../constants';
import { entitiesSelector } from './configureStore';
import {
  getIdsSelectorTitle,
  getItemByIdSelectorTitle,
  getItemsSelectorTitle,
} from '../utils/getSelectorTitles';
import {
  fromListToArray,
  fromMapToObject,
  fromArrayToList,
  fromObjToMap,
} from '../utils/transpileUtils';

export const moviesRequest = (type, query, page = 1) => ({
  queryKey: `${type}${query || ''}${page}`,
  url: `/${REQUEST_URLS[type]}?api_key=${API_KEY}&language=en-US${query ? `&query=${query}` : ''}&page=${page}`,
  options: {
    method: 'GET',
  },
  transform: ({
    [API_RESPONSE_DATA_FIELDS[type]]: data,
    total_pages: totalPages,
  }) => ({
    [type]: {
      [page]: {
        [getIdsSelectorTitle(type)]: data.map(({ id }) => id),
        [getItemByIdSelectorTitle(type)]: data.reduce((res, d) => ({
          ...res,
          [d.id]: d,
        }), {}),
        [getItemsSelectorTitle(type)]: data,
      },
      totalPages,
      currentPage: page,
    },
  }),
  update: {
    [type]: (prev, next) => ({
      ...prev,
      ...next,
    }),
  },
});

export const getModuleSelector = (type) => (state) => entitiesSelector(state)[type] || {};
const getPageSelector = (type, page) => (state) => getModuleSelector(type)(state)[page] || {};
const getIdsSelector = (type, page) => (state) => {
  const ids = getPageSelector(type, page)(state)[getIdsSelectorTitle(type)] || [];
  return fromArrayToList(ids);
};

const getByIdSelector = (type, page) => (state) => {
  const itemsById = getPageSelector(type, page)(state)[getItemByIdSelectorTitle(type)] || {};
  return fromObjToMap(itemsById);
};

const getItemsSelector = (type, page) => (state) => {
  const items = getPageSelector(type, page)(state)[getItemsSelectorTitle(type)] || [];
  return fromArrayToList(items);
};

const createImmutableSelectorCreator = createSelectorCreator(defaultMemoize, is);

export const getImmutableIdsSelector = (type, page = 1) => (
  createImmutableSelectorCreator(
    getIdsSelector(type, page),
    (ids) => fromListToArray(ids),
  ));

export const getImmutableByIdSelector = (type, page = 1) => (
  createImmutableSelectorCreator(
    getByIdSelector(type, page),
    (itemsById) => fromMapToObject(itemsById),
  ));

export const getImmutableItemsSelector = (type, page = 1) => (
  createImmutableSelectorCreator(
    getItemsSelector(type, page),
    (items) => fromListToArray(items),
  ));

export const getTotalPagesSelector = (type) => (
  createSelector(
    getModuleSelector(type),
    (data) => data.totalPages,
  ));

export const searchValueModuleSelector = (state) => entitiesSelector(state)[SEARCH_VALUE_SELECTOR_TITLE] || '';

export const filterByGenreModuleSelector = (state) => (
  entitiesSelector(state)[FILTER_BY_GENRE_SELECTOR_TITLE]);

// const genresSelector = (state) => entitiesSelector(state).genres || {};

// export const genresItemsSelector = (state) => {
//   const genres = (genresSelector(state).genresItems || []);
//   return List([]).merge(genres);
// };

// export const immutableGenresSelector = createImmutableSelectorCreator(
//   genresItemsSelector,
//   (genres) => genres.toArray(),
// );
