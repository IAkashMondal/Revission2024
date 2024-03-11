import {
  GET_DATA_FAILIAURE,
  GET_DATA_LOADING,
  GET_DATA_SUCESS,
} from "./Action.Types.js";

// Fetching actions
export const FetchingLoadingaction = () => ({ type: GET_DATA_LOADING });
export const FetchingSucessAction = (data) => ({
  type: GET_DATA_SUCESS,
  payload: data,
});
export const FetchingErroraction = (error) => ({
  type: GET_DATA_FAILIAURE,
  payload: error,
});

// with  async and await this method called in the Component
export const FetchDataUser = (query) => async (dispatch) => {
  dispatch(FetchingLoadingaction());

  try {
    const response = await fetch(`https://api.github.com/users/?q=${query}`);
    console.log(query,"query inside")

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
