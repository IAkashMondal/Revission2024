import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { reducerthunk } from "./app/reducer/reducer";
export const store = createStore(
  reducerthunk,
  applyMiddleware(logger.default, thunk.deafult)
);
