import {combineReducers} from 'redux';

import apiReducer from './connectApiReducer';
import queryReducer from './inputSearchReducer';

export default combineReducers({
  cocktail: apiReducer,
  query: queryReducer,
});
