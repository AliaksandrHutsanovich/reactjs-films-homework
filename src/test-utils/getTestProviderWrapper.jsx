import React from 'react';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import { queriesSelector } from '../modules/configureStore';

const getTestProviderWrapper = (dataStore) => ({ children }) => (
  <Provider store={dataStore}>
    <ReduxQueryProvider queriesSelector={queriesSelector}>
      {children}
    </ReduxQueryProvider>
  </Provider>
);

export default getTestProviderWrapper;
