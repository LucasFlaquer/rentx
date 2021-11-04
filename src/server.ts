import express from "express";
import swaggerUi from "swagger-ui-express";

import swaggeerFile from "../swagger.json";
import { router } from "./routes";

import "./database";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggeerFile));
app.use(router);
app.listen(3333, () => console.log("Server is Running!"));
