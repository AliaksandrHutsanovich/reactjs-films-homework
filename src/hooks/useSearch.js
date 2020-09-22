import { useCallback } from 'react';
import { updateEntities } from 'redux-query';
import { useStore } from 'react-redux';

const useSelectionOperation = (operationValueTitle) => {
  const store = useStore();
  return useCallback((value) => {
    store.dispatch(
      updateEntities({
        [operationValueTitle]: () => value,
      }),
    );
  }, [store, operationValueTitle]);
};

export default useSelectionOperation;
