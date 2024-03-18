import {
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_SUCESS,
  GET_USER_DATA_lOADING,
  INCREMENT_AMT,
  INCREMENT_POINTS,
} from "./action.Types";

export const Get_User_Data_Loading_Fn = () => ({ type: GET_USER_DATA_lOADING });
export const Get_User_Data_Sucess_Fn = (value) => ({
  type: GET_USER_DATA_SUCESS,
  payload: value,
});
export const Get_User_Data_Failure_Fn = (value) => ({
  type: GET_USER_DATA_FAILURE,
  payload: value,
});
export const Inrement_Amt_Fn = (value) => ({
  type: INCREMENT_AMT,
  payload: value,
});
export const Derement_Amt_Fn = (value) => ({
  type: Derement_Amt,
  payload: value,
});
export const Inrement_Point_Fn = (value) => ({
  type: INCREMENT_POINTS,
  payload: value,
});
