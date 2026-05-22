import React from "react";
import { createRoot } from "react-dom/client";
import ChispaLanding from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChispaLanding />
  </React.StrictMode>
);
