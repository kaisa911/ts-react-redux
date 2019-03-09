import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';
// import { IStoreState } from '../types/index';

const middleware = [thunkMiddleware];

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
