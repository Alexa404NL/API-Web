import "dotenv/config"; 
import express from "express";
import indexRouter from './rutas/index.js';
import { connectDB } from "./utils/sql.js";
import { getUsers } from "./controladores/a.js";

const app = express();
const port = 5000;
const sql= connectDB();

console.log(sql.query("SELECT * FROM users"));

app.use(indexRouter);
app.use(getUsers);

app.listen(port, console.log("http://localhost:"+ port));