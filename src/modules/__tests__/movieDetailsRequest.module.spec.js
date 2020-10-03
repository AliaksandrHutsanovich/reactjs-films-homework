import videosRequest, { movieDetailsRequest } from '../movieDetailsRequest.module';
import {
  API_KEY,
  REQUEST_TYPES,
  SEARCH_VALUE_SELECTOR_TITLE,
  FILTER_BY_GENRE_SELECTOR_TITLE,
} from '../../constants';
import { getImmutableByIdSelector } from '../moviesRequest.module';

describe('movie details request module: ', () => {
  const movieId = 22345;
  it('videoRequest should return right query object', () => {
    const queryConfig = videosRequest(movieId);

    expect(queryConfig).toEqual({
      queryKey: `videos_${movieId}`,
      url: `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
      force: true,
    });
  });

  const queryConfig = movieDetailsRequest(movieId);
  const transformArg = {
    id: 1,
    backdrop_path: '/string',
    genres: [{ id: 1, name: 'genre1' }, { id: 2, name: 'genre2' }],
    overview: 'This is overview',
    vote_average: 3.5,
    title: 'movie',
  };
  const transformedObject = queryConfig.transform(transformArg);
  const updatedStore = {
    entities: {
      [SEARCH_VALUE_SELECTOR_TITLE]: 'queen',
      [FILTER_BY_GENRE_SELECTOR_TITLE]: 'cartoon',
      [REQUEST_TYPES.SEARCH]: {
        ...queryConfig.update[REQUEST_TYPES.SEARCH]({}, transformedObject[REQUEST_TYPES.SEARCH]),
      },
    },
  };

  it('movieDetailsRequest should return query config', () => {
    expect(queryConfig).toEqual({
      queryKey: `movie_${movieId}`,
      url: `/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
      force: true,
      transform: expect.any(Function),
      update: expect.any(Object),
    });
  });

  it('by id selector should return right object', () => {
    expect(getImmutableByIdSelector(REQUEST_TYPES.SEARCH)(updatedStore))
      .toEqual({
        1: transformArg,
      });
  });
});
