import express from "express";
import path from "path";
import { renderMiddleware } from "./renderMidlware";

const app = express();
const PORT = 3000;
//вызывать раньше app.get
app.use(express.static(path.resolve(__dirname, "public")));
app.get("/*", renderMiddleware);

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
