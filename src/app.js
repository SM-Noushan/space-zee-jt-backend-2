import cors from "cors";
import express from "express";
import router from "./app/routes/index.js";
import config from "./app/config/index.js";
import notFound from "./app/middleware/notFound.js";

const app = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: [config.serverUrl1],
  })
);

// application routes
app.use("/", router);

app.get("/", async (req, res) => {
  res.send("Space Zee: Backend 2");
});

// api not found
app.use(notFound);

export default app;
