import { useCallback, useState } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import useVideosRequest from '../useVideosRequest';

const mockFn = jest.fn();
const results = [{ key: 111 }];

jest.mock('react-redux', () => ({
  useDispatch: () => {
    mockFn();
    return async () => ({ body: { results: [{ key: 111 }] } });
  },
}));

const movieIdParam = 1;

describe('useVideosRequest hook', () => {
  const useTestHook = (movieId) => {
    const [id, setId] = useState(movieId);
    const videoKey = useVideosRequest(id);
    const reset = useCallback(() => setId(movieId), [movieId]);
    return { videoKey, reset };
  };

  it('should get video key', async () => {
    const { result, rerender } = renderHook(
      ({ movieId }) => useTestHook(movieId),
      { initialProps: { movieId: movieIdParam } },
    );

    expect(mockFn).toHaveBeenCalled();
    const videoKeyValue = await result.current.videoKey;
    expect(videoKeyValue).toEqual(results[0].key);

    rerender({ movieId: null });
    act(() => {
      result.current.reset();
    });

    // expect(mockFn).not.toHaveBeenCalled();
    const videoKeyValue2 = await result.current.videoKey;
    expect(videoKeyValue2).toEqual('');
  });
});
