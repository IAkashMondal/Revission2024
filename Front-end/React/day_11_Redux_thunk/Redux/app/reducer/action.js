import {
  DATA_FATCHING_FAILURE,
  DATA_FATCHING_SUCESS,
  DATA_FETCHING_LOADING,
} from "./action.Types.js";

export const DataFetchingLoadingFn = () => {
  type: DATA_FETCHING_LOADING;
};
export const DataFetchingSucessFn = (data) => {
  type: DATA_FATCHING_SUCESS;
  payload: data;
};
export const DataFetchingErrorFn = (error) => {
  type: DATA_FATCHING_FAILURE;
  payload: error;
};
export const HideLoadingIndicatorFn = () => {
  console.log("Loading indicator hidden,{value:false}");
};

// Fetchin function---------------------------------------------------------->
export const GetDataByThunkFetching = () => async (dispatch) => {
  dispatch(DataFetchingLoadingFn());
  console.log("Lodaing........");
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve;
    }, 2000)
  ); // delay for 2 sec for loadding indicator......
  try {
    const response = await axios.get("http://localhost:8090/language");
    dispatch(DataFetchingSucessFn(response.data));
  } catch (error) {
    dispatch(DataFetchingErrorFn(error));
  } finally {
    HideLoadingIndicatorFn();
  }
};
