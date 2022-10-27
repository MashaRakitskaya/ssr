import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";

export function Server() {
  console.log("Server");

  return <App />;
}

export function Client() {
  console.log("Client");

  const root = document.getElementById("root") as HTMLElement;

  //для того чтобы работали все слушатели хуки , для объдения разметки и реакта
  hydrateRoot(
    root,
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}
