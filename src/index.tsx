import React from "react";
import { hydrateRoot } from "react-dom/client";
import { StaticRouter } from "react-router-dom/server";
import { BrowserRouter } from "react-router-dom";

import App from "./App/App";
interface ServerProps {
  url: string;
}

export function Server({ url }: ServerProps) {
  console.log("Server");
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
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
