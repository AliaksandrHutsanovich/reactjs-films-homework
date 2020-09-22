import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';

import { queriesSelector } from '../modules/configureStore';
import FilmsPage from '../pages';

const App = ({ store }) => (
  <Provider store={store}>
    <ReduxQueryProvider queriesSelector={queriesSelector}>
      <FilmsPage onAction={() => {}} />
    </ReduxQueryProvider>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
