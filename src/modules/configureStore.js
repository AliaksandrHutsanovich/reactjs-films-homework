import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
  entitiesReducer,
  queryMiddleware,
  queriesReducer,
} from 'redux-query';
import { composeWithDevTools } from 'redux-devtools-extension';

export const queriesSelector = (state = {}) => state.queries || {};
export const entitiesSelector = (state = {}) => state.entities || {};

export const rootReducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
});

export default function configureStore(
  networkInterface,
  initialState,
  reducer = rootReducer,
) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        queryMiddleware(
          networkInterface,
          queriesSelector,
          entitiesSelector,
        ),
      ),
    ),
  );
}
