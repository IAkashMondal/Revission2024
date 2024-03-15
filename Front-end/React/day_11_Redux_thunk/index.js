import { GetDataByThunkFetching } from "./Redux/app/reducer/action.js";
import { store } from "./Redux/store.js";

store.subscribe(() => {
  store.getState();
});
store.dispatch(GetDataByThunkFetching());
