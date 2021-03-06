import {TYPE_INPUT, CANCEL_BUTTON} from '../constants';

const initialState = {
  queryDrink: '',
  isEmpty: true,
};

export default queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPE_INPUT:
      return {...state, queryDrink: action.payload, isEmpty: false};
    case CANCEL_BUTTON:
      return {...state, queryDrink: '', isEmpty: true};
    default:
      return state;
  }
};
