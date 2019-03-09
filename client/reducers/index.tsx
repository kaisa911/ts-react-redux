// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { enthusiasm } from './demo';

console.log(typeof enthusiasm);
const reducers = combineReducers({
  enthusiasm
});

export default reducers;
