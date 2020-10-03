import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';
import { REQUEST_TYPES } from '../../constants';
import useMovieDetailsRequest from '../useMovieDetailsRequest';
import getTestProviderWrapper from '../../test-utils/getTestProviderWrapper';
import getTestInitialState from '../../test-utils/getTestInitialState';

const type = REQUEST_TYPES.SEARCH;
const searchId = 1;
const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
const mockStore = configureStore();
const initialState = getTestInitialState(type, data);

describe('useMovieDetailsRequest hook', () => {
  const dataStore = mockStore({ entities: { ...initialState } });
  it('should get item', () => {
    const wrapper = getTestProviderWrapper(dataStore);
    const { result } = renderHook(
      () => useMovieDetailsRequest(searchId),
      { wrapper },
    );

    expect(result.current.item).toEqual(data[0]);
    expect(result.current.isFinished).toBeFalsy();
  });
});
