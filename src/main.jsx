import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { store } from "./app/store";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

/* 
Una vez el store es creado, podemos hacerlo disponible para todos los componentes, colocando un <Provider/>alrededor de
nuestra aplicación. Importamos el store que justo acabamos de crear, colocamos un <Provider/> alrededor de nuestra <App/> y 
lo pasamos al store como prop.
*/
