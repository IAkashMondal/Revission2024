import { DECREMENTCOUNT, INCREMENTCOUNT, RESETCOUNT } from "./Action.Types.js";
export const reducer = (ReducerState, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENTCOUNT:
      return {
        reducer_count: ReducerState.reducer_count + 1,
      };
    case DECREMENTCOUNT:
      return {
        reducer_count: ReducerState.reducer_count - payload,
      };
    case RESETCOUNT:
      return { reducer_count: 0 };
    default:
      return ReducerState;
  }
};
