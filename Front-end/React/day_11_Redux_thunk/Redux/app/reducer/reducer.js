import {
  DATA_FATCHING_FAILURE,
  DATA_FATCHING_SUCESS,
  DATA_FETCHING_LOADING,
} from "./action.Types.js";

export const initialStateDataFetch = {
  Isloading: false,
  data: [],
  iserror: null,
};
export const reducerthunk = (
  state = initialStateDataFetch,
  { type, payload }
) => {
  switch (type) {
    case DATA_FETCHING_LOADING:
      return { ...state, Isloading: true, iserror: null };
    case DATA_FATCHING_SUCESS:
      return { ...state, Isloading: false, data: payload, iserror: null };
    case DATA_FATCHING_FAILURE:
      return { ...state, Isloading: false, iserror: payload };
    default:
      return state;
  }
};
