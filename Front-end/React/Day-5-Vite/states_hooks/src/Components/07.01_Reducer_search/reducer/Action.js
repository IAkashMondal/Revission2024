import {
  GET_DATA_FAILIAURE,
  GET_DATA_LOADING,
  GET_DATA_SUCESS,
} from "./Action.Types.js";

// action- Creators----------------------------------------------------------------->
export const FetchingLoadingaction = () => ({ type: GET_DATA_LOADING });
export const FetchingSucessAction = (data) => ({
  type: GET_DATA_SUCESS,
  payload: data,
});
export const FetchingErroraction = (error) => ({
  type: GET_DATA_FAILIAURE,
  payload: error,
});

//  actions
// with  async and await this method called in the Component
export const FetchDataUserQuery = (query) => async (dispatch) => {
  dispatch(FetchingLoadingaction());

  try {
    const response = await fetch(`http://localhost:8090/language/?q=${query}`);
  
    //  network errors (status code >= 400)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

    const data = await response.json();
    dispatch(FetchingSucessAction(data));
  } catch (error) {
    dispatch(FetchingErroraction(error));
  }
};
