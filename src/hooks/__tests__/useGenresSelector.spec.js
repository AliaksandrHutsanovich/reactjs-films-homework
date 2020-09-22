import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';
import useGenresSelector from '../useGenresSelector';
import getTestProviderWrapper from '../../test-utils/getTestProviderWrapper';
import { REQUEST_TYPES } from '../../constants';
import getTestInitialState from '../../test-utils/getTestInitialState';

const type = REQUEST_TYPES.GENRES;
const data = [{ id: 1, name: 'genre 1' }, { id: 2, name: 'genre 2' }];
const mockStore = configureStore();
const initialState = getTestInitialState(type, data);

describe('useGenresSelector hook', () => {
  const dataStore = mockStore({ entities: { ...initialState } });
  it('should get items', () => {
    const wrapper = getTestProviderWrapper(dataStore);
    const { result } = renderHook(
      () => useGenresSelector(),
      { wrapper },
    );

    expect(result.current).toEqual(data);
  });
});
