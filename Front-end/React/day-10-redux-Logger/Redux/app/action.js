// Action.js
import { Decrement, Increment, IncrementByPayLoad } from "./Action.types.js";

// Action Creators
export const IncrementCreator = (value) => ({
  type: Increment,
  payload: value,
});

export const DecrementCreator = (value) => ({
  type: Decrement,
  payload: value,
});

export const IncrementByPayloadCreator = (value) => ({
  type: IncrementByPayLoad,
  payload: value,
});
