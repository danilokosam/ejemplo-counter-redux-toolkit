import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: { counter: counterReducer },
});

/*
Esto crea un almacenamiento Redux, y tambien configura automaticamente la extensión herramientas de desarrollo de Redux
de modo que puedo inspeccionar el almacenamiento mientras desarrollo.
*/
