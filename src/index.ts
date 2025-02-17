import express from "express";
import knex from "knex";
import config from "./knexfile.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const db = knex(config[process.env.NODE_ENV || "development"]);
const app = express();

app.use(express.static(path.join(__dirname, "./public")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
