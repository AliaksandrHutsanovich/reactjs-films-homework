import {
  getIdsSelectorTitle,
  getItemByIdSelectorTitle,
  getItemsSelectorTitle,
} from '../utils/getSelectorTitles';
import {
  SEARCH_VALUE_SELECTOR_TITLE,
  FILTER_BY_GENRE_SELECTOR_TITLE,
} from '../constants';

const page = 1;

const getTestInitialState = (type, data, searchValue, filterByGenre, totalPages) => (
  {
    [type]: {
      [page]: {
        [getIdsSelectorTitle(type)]: data.map(({ id }) => id),
        [getItemsSelectorTitle(type)]: data,
      },
      [getItemByIdSelectorTitle(type)]: data.reduce((res, d) => ({
        ...res,
        [d.id]: d,
      }), {}),
      totalPages,
    },
    [SEARCH_VALUE_SELECTOR_TITLE]: searchValue,
    [FILTER_BY_GENRE_SELECTOR_TITLE]: filterByGenre,
  }
);

export default getTestInitialState;
