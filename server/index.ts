import express, { Request, Response } from "express";
import next from "next";
import dotenv from "dotenv";
import * as process from "process";
import connectToDatabase from "./db/connect";
import { mainRouter } from "./router";

dotenv.config({ path: ".env.local" });

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

(async () => {
  try {
    if (!uri) {
      console.log("No MongoDB URI found in environment variables");
      return;
    }
    await connectToDatabase(uri);
    await app.prepare();
    const server = express();
    server.use(express.json());
    server.use("/api", mainRouter);
    server.all("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, () => {
      console.log(
        `>> Ready on localhost:${port} - env ${process.env.NODE_ENV}`
      );
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
