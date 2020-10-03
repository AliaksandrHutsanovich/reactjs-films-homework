export const API_KEY = '35d9068f0889d3801e9e3e560683f042';

export const BASE_URL = 'https://api.themoviedb.org/3';

export const REQUEST_TYPES = {
  SEARCH: 'search',
  TOP_RATED: 'topRated',
  TRENDING: 'trending',
  COMING_SOON: 'comingSoon',
  GENRES: 'genres',
};

export const SEARCH_VALUE_SELECTOR_TITLE = 'searchValue';

export const FILTER_BY_GENRE_SELECTOR_TITLE = 'filterByGenreValue';

export const REQUEST_URLS = {
  [REQUEST_TYPES.SEARCH]: 'search/movie',
  [REQUEST_TYPES.TOP_RATED]: 'movie/top_rated',
  [REQUEST_TYPES.TRENDING]: 'movie/popular',
  [REQUEST_TYPES.COMING_SOON]: 'movie/upcoming',
  [REQUEST_TYPES.GENRES]: 'genre/movie/list',
};

export const IMG_PATH_PREFIX = 'https://image.tmdb.org/t/p/w500';

export const API_RESPONSE_DATA_FIELDS = {
  [REQUEST_TYPES.GENRES]: 'genres',
  ...Object.keys(REQUEST_TYPES)
    .filter((type) => (REQUEST_TYPES[type] !== REQUEST_TYPES.GENRES))
    .reduce(
      (acc, type) => {
        acc[REQUEST_TYPES[type]] = 'results';
        return acc;
      }, {},
    ),
};

export const SCROLL_ID = 'details';
