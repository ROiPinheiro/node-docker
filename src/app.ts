import dotenv from "dotenv";
import express, { Request, Response } from "express";

dotenv.config();

const app = express();

app.get("/", (_: Request, res: Response) => res.json({ hello: "world" }));

export { app };
