import React from "react";
import "./App.css";
import HomePage from "./components/home";
import { createBrowserRouter } from "react-router-dom";

const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

export default App;
