import {
  GET_DATA_FAILIAURE,
  GET_DATA_LOADING,
  GET_DATA_SUCESS
} from "./Action.Types";

//Fetching DATA Reducer Funbction-------------------------------------------------------->
export const initialStateDATA = {
  isLoading: false,
  isError: null,
  DATA: [],
};

export const DataReducer = (
  stateData = initialStateDATA,
  { type, payload }
) => {
  switch (type) {
    case GET_DATA_LOADING:
      return { ...stateData, isLoading: true, isError: null };
    case GET_DATA_SUCESS:
      return {
        ...stateData,
        isLoading: false,
        DATA: payload,
        isError: false,
      };
    case GET_DATA_FAILIAURE:
      return { ...stateData, isLoading: false, isError: payload };
    default:
      return stateData;
  }
};
