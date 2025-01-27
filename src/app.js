import cors from "cors";
import express from "express";
import notFound from "./app/middleware/notFound.js";

const app = express();

// parsers
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5000"],
  })
);

// application routes
// app.use("/api");

app.get("/", async (req, res) => {
  res.send("Space Zee: Backend 2");
});

// api not found
app.use(notFound);

export default app;
