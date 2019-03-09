import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { enthusiasm } from '../reducers/demo';
// import { IStoreState } from '../types/index';

const middleware = [thunkMiddleware];

// const store = createStore(demo, {}, applyMiddleware(...middleware));

const store = createStore(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
  },
  applyMiddleware(...middleware)
);

export default store;
