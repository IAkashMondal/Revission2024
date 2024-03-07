// action.js

import {
  DECREMENTCOUNT,
  GET_LANGUAGE_FAILIAURE,
  GET_LANGUAGE_LOADING,
  GET_LANGUAGE_SUCESS,
  INCREMENTCOUNT,
  RESETCOUNT,
} from "./Action.Types.js";

// Counter actions
export const incrementAction = () => ({ type: INCREMENTCOUNT });
export const decrementAction = (value) => ({
  type: DECREMENTCOUNT,
  payload: value,
});
export const resetAction = () => ({ type: RESETCOUNT });

// Fetching actions
export const FetchingLoadingaction = () => ({ type: GET_LANGUAGE_LOADING });
export const FetchingSucessAction = (payload) => ({
  type: GET_LANGUAGE_SUCESS,
  payload,
});
export const FetchingErroraction = () => ({ type: GET_LANGUAGE_FAILIAURE });

// Fetching data function
export const fetchData = () => (dispatch) => {
  return async () => {
    // Dispatching loading action
    dispatch(FetchingLoadingaction());
    try {
      // Performing data fetching
      const response = await fetch("http://localhost:8090/language");
      if (!response.ok) {
        // Handling HTTP errors
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // Dispatching success action with fetched data
      console.log(data, "fetch-2");
      dispatch(FetchingSucessAction(data));
    } catch (error) {
      // Dispatching error action with error message
      dispatch(FetchingErroraction(error.message));
    }
  };
};
