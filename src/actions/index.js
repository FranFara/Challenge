import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
} from '../constants';

export const changeOnText = texto => {
  return {type: 'ONCHANGE', data: texto};
};

export const fetchingDataRequeste = () => ({type: FETCHING_DATA});

export const fetchingDataSuccess = json => ({
  type: FETCHING_DATA_SUCCESS,
  payload: json,
});

export const fetchingDataFailure = error => ({
  type: FETCHING_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return async dispatch => {
    dispatch(fetchingDataRequeste());
    try {
      let response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka',
      );
      let json = await response.json();
      dispatch(fetchingDataSuccess(json.drinks));
    } catch (error) {
      dispatch(fetchingDataFailure(error));
    }
  };
};
