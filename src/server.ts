import express, { Request, Response } from "express";
import { Pool } from "pg";
// const express = require("express");
const app = express();
const port = 5000;

//parser
app.use(express.json());
app.use(express.urlencoded());

// Database
const pool = new Pool({
  connectionString: process.env.postgreSQL,
});

const initDB = async () => {
  await pool.query(`
        CREATE TABLE IF NOT EXISTS users
        id SERIAL PRIMARY KEY,
        name VARCHAR(20)  NOT NULL,
        email VARCHAR(20) UNIQUE NOT NULL,
        age INT,
        phone VARCHAR(15),
        address TEXT,
        `);
};

// initDB();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.status(201).json({
    success: true,
    message: "API is working",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
