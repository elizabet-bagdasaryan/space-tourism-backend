import express from "express";
import cors from "cors";
import { connection } from "./database/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import getCrew from "./controllers/crewController.js";
import getDestination from "./controllers/destinationControlller.js";
import getTech from "./controllers/techController.js";

const app = express();
dotenv.config();
connection();

app.use(bodyParser.json());
app.use(cors());

app.get("/crew/:name", getCrew);
app.get("/destination/:name", getDestination);
app.get("/technology/:name", getTech);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port 3000");
});
