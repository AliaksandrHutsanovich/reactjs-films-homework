import { useCallback, useState } from 'react';
import configureStore from 'redux-mock-store';
import { renderHook, act } from '@testing-library/react-hooks';
import useSelectionOperation from '../useSearch';
import {
  SEARCH_VALUE_SELECTOR_TITLE,
  FILTER_BY_GENRE_SELECTOR_TITLE,
} from '../../constants';
import getTestProviderWrapper from '../../test-utils/getTestProviderWrapper';

const search = 'queen';
const filter = 'filter';
const mockStore = configureStore();
const initialState = {
  [SEARCH_VALUE_SELECTOR_TITLE]: '',
  [FILTER_BY_GENRE_SELECTOR_TITLE]: null,
};

describe('useSearch hook', () => {
  const dataStore = mockStore({ entities: { ...initialState } });
  const wrapper = getTestProviderWrapper(dataStore);

  const useTestHook = (operationValueTitle) => {
    const [value, setValue] = useState(operationValueTitle);
    const handleUpdate = useSelectionOperation(value);
    const reset = useCallback(() => setValue(operationValueTitle), [operationValueTitle]);
    return { handler: handleUpdate, reset };
  };

  it('should update appropriate entity', () => {
    const { result, rerender } = renderHook(
      ({ operationTitle }) => useTestHook(operationTitle),
      { wrapper, initialProps: { operationTitle: SEARCH_VALUE_SELECTOR_TITLE } },
    );

    act(() => {
      result.current.handler(search);
    });
    rerender({ operationTitle: FILTER_BY_GENRE_SELECTOR_TITLE });

    act(() => {
      result.current.reset();
    });
    const [{ update: { [SEARCH_VALUE_SELECTOR_TITLE]: getValue1 } }] = dataStore.getActions();

    expect(getValue1()).toEqual(search);

    act(() => {
      result.current.handler(filter);
    });

    const submittedActions = dataStore.getActions();
    const {
      update: {
        [FILTER_BY_GENRE_SELECTOR_TITLE]: getValue2,
      },
    } = submittedActions[submittedActions.length - 1];

    expect(getValue2()).toEqual(filter);
  });
});
