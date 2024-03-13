import {
  Decrement,
  Increment,
  IncrementByPayLoad,
  Mutable_Decrement,
  Mutable_Increment,
  Mutable_IncrementByPayLoad,
} from "./Action.types.js";

const immutable_InitialValue = {
  Immutable_count: 0,
};
// recomended---------------------------------------------------------------------------->
export const ImmutaableReducer = (
  state = immutable_InitialValue,
  { type, payload }
) => {
  switch (type) {
    case Increment:
      return { ...state, Immutable_count: state.Immutable_count + payload };
    case Decrement:
      return { ...state, Immutable_countt: state.Immutable_count - payload };
    case IncrementByPayLoad:
      return { ...state, Immutable_count: state.Immutable_count + payload };
    default:
      return state;
  }
};
const MutableInitialValue = {
  mutable_count: 0,
  // Not recomended---------------------------------------------------------------------------->
};
export const MutaableReducer = (
  state = MutableInitialValue,
  { type, payload }
) => {
  switch (type) {
    case Mutable_Increment: {
      state.mutable_count = state.mutable_count + payload;
    }
    case Mutable_Decrement: {
      state.mutable_count = state.mutable_count - payload;
    }
    case Mutable_IncrementByPayLoad: {
      state.mutable_count = state.mutable_count + payload;
    }
    default:
      return state;
  }
};
