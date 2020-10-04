import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Provider as ReduxQueryProvider } from 'redux-query-react';
import { HashRouter as Router } from 'react-router-dom';

import { queriesSelector } from '../modules/configureStore';
import { FilmsPage } from '../containers';

const App = ({ store }) => (
  <Router>
    <Provider store={store}>
      <ReduxQueryProvider queriesSelector={queriesSelector}>
        <FilmsPage />
      </ReduxQueryProvider>
    </Provider>
  </Router>
);

App.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
