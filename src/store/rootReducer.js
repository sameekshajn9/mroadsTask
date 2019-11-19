import userReducer from './userReducer';
import { combineReducers } from 'redux';
import { navReducer } from '../navigation';

export default combineReducers({
  user: userReducer,
  nav: navReducer
});
