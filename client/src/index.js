import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Provider from "./store/Provider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
