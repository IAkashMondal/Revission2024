import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {thunk }from "redux-thunk"
import { reducerthunk } from "./app/reducer/reducer.js";

export const store = createStore(
  reducerthunk,
  applyMiddleware(thunk, logger.default)
);
