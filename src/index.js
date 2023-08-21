import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TaskProvider from "./context/taskContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TaskProvider>
        <App />
      </TaskProvider>
    </Router>
  </React.StrictMode>
);
