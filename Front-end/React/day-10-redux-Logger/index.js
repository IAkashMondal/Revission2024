import {
  DecrementCreator,
  IncrementCreator,
} from "./Redux/app/action.js";
import { store } from "./Redux/app/store.js";
const Immutablehitory = [];


// run bet every 5 secon using setInterval running with logger
setInterval(() => {
  store.dispatch(IncrementCreator(1));
  store.dispatch(DecrementCreator(3));
}, 5000);
