import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers, { enthusiasm } from '../reducers/demo';
// import { IStoreState } from '../types/index';

const middleware = [thunkMiddleware];

// const store = createStore(demo, {}, applyMiddleware(...middleware));
console.log(reducers);
console.log(enthusiasm);

const store = createStore(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript'
  },
  applyMiddleware(...middleware)
);

export default store;
