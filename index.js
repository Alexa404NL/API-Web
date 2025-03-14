import "dotenv/config"; 
import express from "express";
import indexRouter from './rutas/index.js';
import { connectDB } from "./utils/sql.js";
import userRoutes from "./rutas/rutas.js";
import loginRoutes from "./rutas/login.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
const port = 5000;
const sql= connectDB();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(indexRouter);
app.use(userRoutes);
app.use(loginRoutes);


app.listen(port, console.log("http://localhost:"+ port));