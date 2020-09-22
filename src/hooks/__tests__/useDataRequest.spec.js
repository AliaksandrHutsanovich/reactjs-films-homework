import { renderHook } from '@testing-library/react-hooks';
import configureStore from 'redux-mock-store';
import useDataRequest from '../useDataRequest';
import getTestProviderWrapper from '../../test-utils/getTestProviderWrapper';
import getTestInitialState from '../../test-utils/getTestInitialState';

const type = 'data';
const page = 1;
const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
const mockStore = configureStore();
const initialState = getTestInitialState(type, data);

describe('useDataRequest hook', () => {
  const dataStore = mockStore({ entities: { ...initialState } });
  it('should get items', () => {
    const wrapper = getTestProviderWrapper(dataStore);
    const { result } = renderHook(
      () => useDataRequest(type, 'qu', page),
      { wrapper },
    );

    expect(result.current.items).toEqual(data);
    expect(result.current.isFinished).toBeFalsy();
  });
});
