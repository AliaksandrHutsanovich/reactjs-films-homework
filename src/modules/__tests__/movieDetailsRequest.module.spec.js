import videosRequest from '../movieDetailsRequest.module';
import { API_KEY } from '../../constants';

describe('movie details request module', () => {
  const movieId = 22345;
  it('should return right query object', () => {
    const queryConfig = videosRequest(movieId);

    expect(queryConfig).toEqual({
      queryKey: `videos_${movieId}`,
      url: `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
      force: true,
    });
  });
});
