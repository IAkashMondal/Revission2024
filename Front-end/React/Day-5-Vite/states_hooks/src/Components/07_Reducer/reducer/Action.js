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
export const FetchingSucessAction = (data) => ({
  type: GET_LANGUAGE_SUCESS,
  payload: data,
});
export const FetchingErroraction = (error) => ({
  type: GET_LANGUAGE_FAILIAURE,
  payload: error,
});

// fetchData function
export const fetchData = async () => {
  return async (dispatch) => {
    dispatch(FetchingLoadingaction());
    try {
      const response = await fetch("http://localhost:8090/language");
      const data = await response.json();
      console.log(data, "fetch-action.js-L:38");
      dispatch(FetchingSucessAction(data));
    } catch (error) {
      dispatch(FetchingErroraction(error.message));
    }
  };
};
