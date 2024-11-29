import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import db from "./src/models/index";
import response from "./src/utils/response";
import "module-alias/register";

import { createServer, Server as HTTPServer } from 'http';

/**
 * @admin routes
 */
import adminHomeRoutes from "./src/routes/admin/home/home.route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
const httpServer = createServer(app);

/**
 * @admin routes
 */
app.use("/api/v1/admin/", adminHomeRoutes);


app.use("*", function (req: Request, res: Response) {
  response.error(res, {
    statusCode: 404,
    message: "Invalid URL!",
  });
});

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
// });
httpServer.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});