// import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import demo from './demo';

console.log(typeof demo);
const reducers = combineReducers({
  demo
});

export default reducers;
