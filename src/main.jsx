import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { BrowserRouter } from "react-router-dom";
import { FilmRoutes } from "./routes/FilmRoutes";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <BrowserRouter>
        <FilmRoutes />
      </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>
);
