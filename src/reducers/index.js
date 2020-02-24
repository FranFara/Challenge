import {combineReducers} from 'redux';

import apiReducer from './connectApiReducer';

export default combineReducers({
  cocktail: apiReducer,
});
