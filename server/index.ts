import express from "express";
import path from "path";
import { renderMiddleware } from "./renderMidlware";

const app = express();
const PORT = 3000;
app.get("/*", renderMiddleware);
app.use(express.static(path.resolve(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
