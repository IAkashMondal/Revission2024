// Actions
import {  DECREMENTCOUNT, INCREMENTCOUNT, RESETCOUNT,  } from "./Action.Types";
export const incrementAction = () => ({ type: INCREMENTCOUNT });
export const decrementAction = (amount) => ({
  type: DECREMENTCOUNT,
  payload: amount,
});
export const resetAction = () => ({ type: RESETCOUNT });
