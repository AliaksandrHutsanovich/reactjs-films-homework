import { API_KEY, REQUEST_TYPES } from '../constants';
import {
  getItemByIdSelectorTitle,
} from '../utils/getSelectorTitles';

const videosRequest = (movieId) => ({
  queryKey: `videos_${movieId}`,
  url: `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
  force: true,
});

export const movieDetailsRequest = (movieId) => ({
  queryKey: `movie_${movieId}`,
  url: `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  force: true,
  transform: ({
    id,
    backdrop_path: imgPath,
    genres,
    overview,
    vote_average: rating,
    title,
    runtime,
  }) => ({
    [REQUEST_TYPES.SEARCH]: {
      [id]: {
        id,
        backdrop_path: imgPath,
        genres,
        overview,
        vote_average: rating,
        title,
        runtime,
      },
    },
  }),
  update: {
    [REQUEST_TYPES.SEARCH]: (prev, next) => ({
      ...prev,
      [getItemByIdSelectorTitle(REQUEST_TYPES.SEARCH)]: {
        ...(prev && prev[getItemByIdSelectorTitle(REQUEST_TYPES.SEARCH)]),
        ...next,
      },
    }),
  },
});

export default videosRequest;
