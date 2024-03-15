import {
  GetDataByThunkFetching,
  GetDataByThunkFetchingByID,
} from "./Redux/app/reducer/action.js";
import { store } from "./Redux/store.js";
// colotr for terminat output--------------------------------->
export const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  BrightRed: "\x1b[91m",
  BrightMagenta: "\x1b[95m",
  BrightCyan: "\x1b[96m",
  BrightWhite: "\x1b[97m",
  reset: "\x1b[0m",
};

//Index.js--------------------------------------------->
store.subscribe(() => {
  store.getState();
});
store.dispatch(GetDataByThunkFetchingByID(4));
// store.dispatch(GetDataByThunkFetching());
