import {
  Decrement,
  Increment,
  IncrementByPayLoad
} from "./Action.types.js";

const InitialValue = {
  count: 0,
};
// recomended---------------------------------------------------------------------------->
export const reducer = (state = InitialValue, { type, payload }) => {
  switch (type) {
    case Increment:
      return { ...state, count: state.count + payload };
    case Decrement:
      return { ...state, countt: state.count - payload };
    case IncrementByPayLoad:
      return { ...state, count: state.count + payload };
    default:
      return state;
  }
};
