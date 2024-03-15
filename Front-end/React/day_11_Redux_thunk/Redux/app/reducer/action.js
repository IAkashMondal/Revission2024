import { colors } from "../../../index.js";
import {
  DATA_FATCHING_FAILURE,
  DATA_FATCHING_FAILURE_By_ID,
  DATA_FATCHING_SUCESS,
  DATA_FATCHING_SUCESS_By_ID,
  DATA_FETCHING_LOADING,
  DATA_FETCHING_LOADING_By_ID,
} from "./action.Types.js";
import axios from "axios";

// Color for console Loading.....

export const DataFetchingLoadingFn = () => ({
  type: DATA_FETCHING_LOADING,
});
export const DataFetchingSucessFn = (data) => ({
  type: DATA_FATCHING_SUCESS,
  payload: data,
});
export const DataFetchingErrorFn = (error) => ({
  type: DATA_FATCHING_FAILURE,
  payload: error,
});

export const DataFetchingLoadingByIdFn = () => ({
  type: DATA_FETCHING_LOADING_By_ID,
});
export const DataFetchingSucessByIdFn = (data) => ({
  type: DATA_FATCHING_SUCESS_By_ID,
  payload: data,
});
export const DataFetchingErrorByIdFn = (error) => ({
  type: DATA_FATCHING_FAILURE_By_ID,
  payload: error,
});
export const HideLoadingIndicatorFn = async () => {
  await setTimeout(() => {
    console.log(
      `${colors.blue}Opration Ends------------------------------>${colors.reset}`
    );
  }, 2000);
};

// Fetchin function---------------------------------------------------------->
export const GetDataByThunkFetching = () => async (dispatch) => {
  console.log(
    `${colors.BrightMagenta}.................................. Fething All Data .................................. ${colors.reset}`
  );

  dispatch(DataFetchingLoadingFn());
  console.log(`${colors.red}Loading............................`);
  try {
    setTimeout(async () => {
      console.log(
        `${colors.BrightMagenta}Loading End............................ ${colors.reset} ${colors.reset}`
      );
      const response = await axios.get("http://localhost:8090/language");
      dispatch(DataFetchingSucessFn(response.data));
    }, 2000);
    clearTimeout(response.setTimeout);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error(
        `${colors.BrightWhite}Request canceled: ${colors.BrightMagenta}${error.message} ${colors.reset}`
      );
    } else if (error.code === "ECONNABORTED") {
      console.error(
        `${colors.BrightWhite} Request timed out: ${colors.BrightMagenta}${error} ${colors.reset}`
      );
      dispatch(DataFetchingErrorFn(new Error("Timeout")));
    } else {
      console.error(
        `Error fetching data:", ${colors.BrightMagenta}${error} ${colors.reset}`
      );
      dispatch(
        DataFetchingErrorFn(`${colors.BrightMagenta}${error} ${colors.reset}`)
      );
    }
  } finally {
    HideLoadingIndicatorFn();
  }

};
// Fetchin function By id---------------------------------------------------------->
export const GetDataByThunkFetchingByID = (Query_id) => async (dispatch) => {
  console.log(
    `${colors.BrightRed}.................................. Search By Id .................................. ${colors.reset}`
  );
  dispatch(DataFetchingLoadingByIdFn());
  console.log(
    `${colors.red}Loading............................ ${colors.reset}`
  );

  try {
    setTimeout(async () => {
      console.log(
        `${colors.BrightMagenta}Loading End............................ ${colors.reset} ${colors.reset}`
      );
      const response = await axios.get(
        `http://localhost:8090/language/${Query_id}`
      );
      dispatch(DataFetchingSucessByIdFn(response.data));
    }, 2000);
    clearTimeout(response.setTimeout);
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error(
        `${colors.BrightWhite}Request canceled: ${colors.BrightMagenta}${error.message} ${colors.reset}`
      );
    } else if (error.code === "ECONNABORTED") {
      console.error(
        `${colors.BrightWhite} Request timed out: ${colors.BrightMagenta}${error} ${colors.reset}`
      );
      dispatch(DataFetchingErrorByIdFn(new Error("Timeout")));
    } else {
      console.error(
        `Error fetching data:", ${colors.BrightMagenta}${error} ${colors.reset}`
      );
      dispatch(
        DataFetchingErrorFn(`${colors.BrightMagenta}${error} ${colors.reset}`)
      );
    }
  } finally {
    HideLoadingIndicatorFn();
  }
};
