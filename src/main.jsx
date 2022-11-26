import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "./css/_main.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="container-blob-1"></div>
    <div className="container-blob-2"></div>
    <App />
  </BrowserRouter>
);
