import ReactDOM from "react-dom/client";
import App from "./App";
import React from "react";
import "./css/_main.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div class="container-blob-1"></div>
    <div class="container-blob-2"></div>
    {/* <svg
      className="blob blob--1"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#deebf8"
        d="M53.3,-63.8C68.1,-51.1,78.5,-33.4,81.5,-14.6C84.4,4.1,80.1,23.9,70.5,41C61,58,46.2,72.3,28,80.5C9.7,88.8,-12.2,91.1,-30.4,84.1C-48.6,77.2,-63.2,61.1,-69.8,43.3C-76.4,25.6,-75,6.3,-68.5,-8.9C-62,-24.1,-50.4,-35.1,-38.1,-48.3C-25.8,-61.4,-12.9,-76.7,3.2,-80.4C19.3,-84.2,38.5,-76.6,53.3,-63.8Z"
        transform="translate(100 100)"
      />
    </svg>
    <svg
      className="blob blob--2"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFFAD1"
        d="M40.4,-56.9C52.4,-46.8,62.5,-35.2,66.7,-21.8C70.9,-8.4,69.3,6.8,63.9,19.9C58.5,33,49.2,44,37.9,54.7C26.6,65.5,13.3,76,-0.5,76.7C-14.3,77.4,-28.7,68.3,-38.9,57.2C-49.2,46.1,-55.3,33.1,-61.1,19C-66.9,4.9,-72.3,-10.2,-69.7,-24.1C-67.2,-38,-56.7,-50.8,-43.7,-60.6C-30.8,-70.4,-15.4,-77.3,-0.6,-76.4C14.1,-75.5,28.3,-67,40.4,-56.9Z"
        transform="translate(100 100)"
      />
    </svg> */}
    <App />
  </BrowserRouter>
);
