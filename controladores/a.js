import { query } from "express";
import { connectDB } from "../utils/sql.js";

export const getUsers = async (req, res) => {
 const sql = connectDB();
 const data = await sql.query("SELECT * FROM users");
    return res.json(data);
};

export const getUser = async (req, res) => {
    const sql = connectDB();
    let query ={
        text: "SELECT * FROM users WHERE user_id = $1",
        values: [req.params.id],
    }
    console.log(query);
    const data = await sql.query(query);
    return res.json(data);
   };