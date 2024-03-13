import { createStore } from "redux";
import { ImmutaableReducer, MutaableReducer } from "./reducer.js";

//Immutable store---------------------------------------------------------->

export const store = createStore(ImmutaableReducer);

// Mutable Store-------------------------------------------------------------->
// export const store = createStore(MutaableReducer);
