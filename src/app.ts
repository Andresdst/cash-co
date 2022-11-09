import express from "express";
import morgan from "morgan";
import movementsRouter from "./routes/movements";
import categoriesRouter from "./routes/categories";
import cors from "cors";
import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

//init
const app = express();

//settings
app.use;
app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.get("/ping", (_req, res) => {
  console.log("ping here!");
  res.send("pong");
});

app.use("/api/movements", movementsRouter);
app.use("/api/categories", categoriesRouter);

export default app;
