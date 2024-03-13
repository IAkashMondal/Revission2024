import {
  DecrementCreator,
  IncrementCreator,
  Mutable_DecrementCreator,
  Mutable_IncrementCreator,
} from "./Redux/app/action.js";
import { store } from "./Redux/app/store.js";

// global state---------------------------------------------------------------->
// console.log(store.getState(), "before-1");
// store.dispatch(IncrementCreator(1));
// console.log(store.getState(), "after-0");
// store.dispatch(DecrementCreator(3));
// console.log(store.getState(), "before-2");

// ==============================================================================================================================


//recomended-------ImMutable----------------------------------------------------------->
const Immutablehitory = [];

//Subscribve Method 
store.subscribe(() => {
  Immutablehitory.push(store.getState());
  console.log(Immutablehitory, "Immutable hisory");
});

// run bet every 3 secon using setInterval
setInterval(() => {
  store.dispatch(IncrementCreator(1));
  store.dispatch(DecrementCreator(3));
}, 3000);
//  ======================================================================================================================


// Not recomended-------Mutable----------xxxxxxxxxxxx------------------------------------------------->

// const MutableHistory = [];
//Subscribve xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// store.subscribe(() => {
//    MutableHistory.push(store.getState());
//    console.log(MutableHistory, "Mutable hisory");
// });

// run bet every 3 secon using setInterval------------xxxxxxxxxxxxxxxxxxxxxxxxxx------------------------->
// setInterval(() => {
//   store.dispatch(Mutable_IncrementCreator(1));
//   store.dispatch(Mutable_DecrementCreator(3));
// }, 3000);
