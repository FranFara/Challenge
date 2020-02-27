import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  DELETE_DATA,
} from '../constants';

const initialState = {
  drinks: [],
  errorMessage: '',
  isFetching: true,
};

export default apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {...state, isFetching: true};
    case FETCHING_DATA_SUCCESS:
      return {...state, isFetching: false, drinks: action.payload};
    case FETCHING_DATA_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    case DELETE_DATA:
      return {...state, drinks: []};
    default:
      return state;
  }
};
