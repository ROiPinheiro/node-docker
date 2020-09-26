import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

app.get("/", (_, res) => res.json({ hello: "world" }));

export { app };
