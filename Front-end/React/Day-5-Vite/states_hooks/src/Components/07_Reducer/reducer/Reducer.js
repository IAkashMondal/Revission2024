import {
  DECREMENTCOUNT,
  GET_LANGUAGE_FAILIAURE,
  GET_LANGUAGE_LOADING,
  GET_LANGUAGE_SUCESS,
  INCREMENTCOUNT,
  RESETCOUNT,

} from "./Action.Types.js";
export const initialStateCounter = {
  language: [],

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
  isError: false
};

export const languageReducer = (state = initialStateLanguage, action) => {
  switch (action.type) {
    case GET_LANGUAGE_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_LANGUAGE_SUCESS:
      return {
        ...state,
        language: action.payload,
        isLoading: false,
        isError: false,
      };
    case GET_LANGUAGE_FAILIAURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};