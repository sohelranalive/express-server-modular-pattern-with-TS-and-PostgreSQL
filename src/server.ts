import express, { Request, Response } from "express";

import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoute } from "./modules/auth/auth.routes";

const app = express();
const port = config.port;

//parser
app.use(express.json());

// parser for form data
// app.use(express.urlencoded());

//initializing DB
initDB();

// Root Path
app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World!");
});

// Users's CRUD Operation
app.use("/users", userRoutes);

// TODO's CRUD Operation
app.use("/todos", todoRoutes);

// Use auth route
app.use("/auth", authRoute);

// Bad Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not found",
    path: req.path,
  });
});

// Listening
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
