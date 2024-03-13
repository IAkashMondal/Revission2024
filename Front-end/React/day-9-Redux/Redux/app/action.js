// Action.js
import {
  Decrement,
  Increment,
  IncrementByPayLoad,
  Mutable_Decrement,
  Mutable_Increment,
  Mutable_IncrementByPayLoad,
} from "./Action.types.js";

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
// mutable actions Creators------------------------------------------------->
export const Mutable_IncrementCreator = (value) => ({
  type: Mutable_Increment,
  payload: value,
});

export const Mutable_DecrementCreator = (value) => ({
  type: Mutable_Decrement,
  payload: value,
});

export const Mutable_IncrementByPayloadCreator = (value) => ({
  type: Mutable_IncrementByPayLoad,
  payload: value,
});
