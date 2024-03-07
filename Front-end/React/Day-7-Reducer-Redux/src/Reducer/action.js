import { DECREMENT, INCREMENT, RESET } from "./action.Types";

export const IncrementAction = () => ({ type: INCREMENT });
export const DecrementAction = (value) => ({
  type: DECREMENT,
  payload: value,
});
export const ResetAction = () => ({ type: RESET });
