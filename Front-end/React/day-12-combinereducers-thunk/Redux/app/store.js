import { createStore, applyMiddleware, combinereducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
export const store = createStore(
  combinereducers(
    {
      account: XMLDocument,
      points: vjihn,
    },
    applyMiddleware(logger.deafult, thunk)
  )
);
