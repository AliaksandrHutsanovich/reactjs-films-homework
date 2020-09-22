import { useDispatch } from 'react-redux';
import { requestAsync } from 'redux-query';
import videosRequest from '../modules/movieDetailsRequest.module';

const useVideosRequest = async (movieId) => {
  let videoKey = '';
  const dispatch = useDispatch();
  if (movieId) {
    const { body: { results } } = await dispatch(requestAsync(videosRequest(movieId)));
    videoKey = results[0]?.key;
  }
  return videoKey;
};

export default useVideosRequest;
