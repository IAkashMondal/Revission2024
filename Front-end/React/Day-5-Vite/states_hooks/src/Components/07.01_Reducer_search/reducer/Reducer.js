import {
  DECREMENTCOUNT,
  GET_LANGUAGE_FAILIAURE,
  GET_LANGUAGE_LOADING,
  GET_LANGUAGE_SUCESS,
  INCREMENTCOUNT,
  RESETCOUNT,
} from "./Action.Types.js";
export const initialStateCounter = {
  count: 0,
};
export const Counterreducer = (state = initialStateCounter, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENTCOUNT:
      return {
        count: state.count + 1,
      };
    case DECREMENTCOUNT:
      return {
        count: state.count - payload,
      };
    case RESETCOUNT:
      return { count: 0 };
    default:
      return state;
  }
};
//Fetching Language Reducer Funbction-------------------------------------------------------->
export const initialStateLanguage = {
  language: [],
  isLoading: false,
  isError: null,
};

export const languageReducer = (
  stateData = initialStateLanguage,
  { type, payload }
) => {
  switch (type) {
    case GET_LANGUAGE_LOADING:
      return { ...stateData, isLoading: true, isError: null };
    case GET_LANGUAGE_SUCESS:
      return {
        ...stateData,
        isLoading: false,
        language: payload,
        isError: false,
      };
    case GET_LANGUAGE_FAILIAURE:
      return { ...stateData, isLoading: false, isError: payload };
    default:
      return stateData;
  }
};
