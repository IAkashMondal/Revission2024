import { createStore, applyMiddleware } from "redux";
import  logger  from "redux-logger";
import { reducer } from "./reducer.js";
export const store = createStore(reducer, applyMiddleware(logger.default));
// applymiddlewarw basicaly use for using any redux middlewarein this case we r using logger
// logger is amiddleware is besi cally logg the action and global state