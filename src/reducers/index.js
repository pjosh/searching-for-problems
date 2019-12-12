import { combineReducers } from 'redux';
import scumm from './scumm';
import finalFantasy from './finalFantasy';

const reducer = combineReducers({
  scumm,
  finalFantasy
});

export default reducer;
