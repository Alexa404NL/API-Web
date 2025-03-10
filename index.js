import "dotenv/config"; 
import express from "express";
import indexRouter from './rutas/index.js';
import { connectDB } from "./utils/sql.js";
import userRoutes from "./rutas/rutas.js";

const app = express();
const port = 5000;
const sql= connectDB();

console.log(sql.query("SELECT * FROM users"));

app.use(indexRouter);
app.use(userRoutes);

app.listen(port, console.log("http://localhost:"+ port));