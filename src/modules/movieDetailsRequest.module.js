import { API_KEY } from '../constants';

const videosRequest = (movieId) => ({
  queryKey: `videos_${movieId}`,
  url: `/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`,
  force: true,
});

export default videosRequest;
