import React from 'react';
import ReactDOM from 'react-dom';
// import Signature from './components';
import {
  SEARCH_VALUE_SELECTOR_TITLE,
  FILTER_BY_GENRE_SELECTOR_TITLE,
} from './constants';
import App from './app';
import configureStore from './modules/configureStore';
import networkInterface from './modules/networkInterface';

const store = configureStore(networkInterface, {
  entities: {
    [SEARCH_VALUE_SELECTOR_TITLE]: '',
    [FILTER_BY_GENRE_SELECTOR_TITLE]: null,
  },
});

ReactDOM.render(
  <App store={store} />,
  document.getElementById('container'),
);
