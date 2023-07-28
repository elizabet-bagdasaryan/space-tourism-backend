import express from "express";
import cors from "cors";
import { connection } from "./database/mongo.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
connection();

app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening on port 3000");
});
