import {
  DATA_FATCHING_FAILURE,
  DATA_FATCHING_FAILURE_By_ID,
  DATA_FATCHING_SUCESS,
  DATA_FATCHING_SUCESS_By_ID,
  DATA_FETCHING_LOADING,
  DATA_FETCHING_LOADING_By_ID,
} from "./action.Types.js";

export const initialStateDataFetch = {
  Isloading: false,
  data: [],
  datById: [],
  IsError: null,
};
export const reducerthunk = (
  state = initialStateDataFetch,
  { type, payload }
) => {
  switch (type) {
    case DATA_FETCHING_LOADING:
    case DATA_FETCHING_LOADING_By_ID:
      return {
        ...state,
        Isloading: true,
        dataByID: [],
        data: [],
        IsError: null,
      };
    case DATA_FATCHING_SUCESS:
      return {
        ...state,
        Isloading: false,
        data: payload,
        dataByID: [],
        IsError: null,
      };
    case DATA_FATCHING_SUCESS_By_ID:
      return {
        ...state,
        Isloading: false,
        data: [],
        dataByID: payload,
        IsError: null,
      };
    case DATA_FATCHING_FAILURE:
    case DATA_FATCHING_FAILURE_By_ID:
      return { ...state, Isloading: false, IsError: payload };
    default:
      return state;
  }
};
