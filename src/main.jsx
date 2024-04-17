import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import { FilmRoutes } from "./routes/FilmRoutes";
import { ContextProvider } from "./context/ContextProvider";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ContextProvider>
        <BrowserRouter>
          <FilmRoutes />
        </BrowserRouter>
      </ContextProvider>
    </Provider>
  </React.StrictMode>
);
