import {
  DECREMENTCOUNT,
  GET_LANGUAGE_FAILIAURE,
  GET_LANGUAGE_LOADING,
  GET_LANGUAGE_SUCESS,
  INCREMENTCOUNT,
  RESETCOUNT,
} from "./Action.Types.js";
console.log("action.js")
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
// with out async and await
export const GetLang = () => (dispatch) => {
  dispatch(FetchingLoadingaction());
  return fetch("http://localhost:8090/language")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(FetchingSucessAction(data));
    })
    .catch((error) => {
      dispatch(FetchingErroraction(error));
    });
};
// with  async and await this method called in the Component
export const FetchDataLang = () => async (dispatch) => {
  dispatch(FetchingLoadingaction());

  try {
    const response = await fetch("http://localhost:8090/language");

    // Check for network errors (status code >= 400)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    dispatch(FetchingSucessAction(data));
  } catch (error) {
    dispatch(FetchingErroraction(error));
  }
};
