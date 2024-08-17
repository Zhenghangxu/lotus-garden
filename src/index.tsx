import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";

// Import Fonts
import "@fontsource-variable/noto-sans-kayah-li";
import "@fontsource/kaushan-script";
import "@fontsource/inria-serif/300.css";
import "@fontsource/inria-serif/400.css";
import "@fontsource/inria-serif/700.css";
import '@fontsource-variable/inter';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={App} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
