import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      /*
            Redux nos permite escribir logica mutada en reducers. Esto no realmente muta el estado porque usa la
            libreria immer, la cual detecta cambios a un "draft state (borrador o boceto)" y produce una nueva
            marca inmutable de ese estado basado en esos cambios.
            */
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value == 0) return;
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/* 
.actions
Cuando usamos createSlice de Redux Toolkit, se generan automáticamente los action creators para cada uno de los reducers
que definimos. Estos action creators son funciones que devuelven objetos de acción que puedes despachar (dispatch) para
actualizar el estado.

.reducer
El reducer es la función que realmente maneja las actualizaciones del estado basadas en las acciones despachadas. Redux
Toolkit combina todos los reducers que definimos en createSlice en una sola función reduce que maneja el estado de ese
slice. Lo podemos llegar a usar para configurar nuestro store.
*/

/* 
La función de abajo es llamada "thunk" y nos permite realizar una logica asyncrona. Esta puede ser despachada como una acción regular
`dispatch(incrementAsync(10))`. Esto llamara a el thunk con el dispatch como primer argumento. El codigo asyncrono puede entonces ser
ejecutado y otras actions pueden ser despachadas.
*/
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

/*
La función de abajo es llamada un selector y nos permite seleccionar un valor del estado. Los Selectores pueden tambien ser definidos en
linea donde ellos son usados en lugar de en el archivo slice
*/

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
