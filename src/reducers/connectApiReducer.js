import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants';

const initialState = {
  tragos: [],
  errorMessage: '',
  isFetching: true,
};

export default apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {...state, isFetching: true};
    case FETCHING_DATA_SUCCESS:
      return {...state, isFetching: false, tragos: action.payload};
    case FETCHING_DATA_FAILURE:
      return {...state, isFetching: false, errorMessage: action.payload};
    default:
      return state;
  }
};
