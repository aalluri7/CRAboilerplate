import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk, createLogger()))
  );
};

export default configureStore({});
