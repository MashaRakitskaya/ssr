import React from "react";
import { StaticRouter } from "react-router-dom/server";

export function router({ serverApp, url }) {
  return <StaticRouter location={url}>{serverApp}</StaticRouter>;
}
