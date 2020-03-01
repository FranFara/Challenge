import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  DELETE_DATA,
  TYPE_INPUT,
  CANCEL_BUTTON
} from "../constants";

export const fetchingDataRequeste = () => ({ type: FETCHING_DATA });

export const fetchingDataSuccess = json => ({
  type: FETCHING_DATA_SUCCESS,
  payload: json
});

export const fetchingDataFailure = error => ({
  type: FETCHING_DATA_FAILURE,
  payload: error
});

export const deleteData = () => ({ type: DELETE_DATA });

export const fetchData = textInput => {
  return async dispatch => {
    dispatch(fetchingDataRequeste());
    try {
      let response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + textInput
      );
      let json = await response.json();
      dispatch(fetchingDataSuccess(json.drinks));
    } catch (error) {
      dispatch(fetchingDataFailure(error));
    }
  };
};

export const onChanGe = text => ({
  type: TYPE_INPUT,
  payload: text
});

export const cancelButton = () => ({
  type: CANCEL_BUTTON
});
