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

export const postUser = async (req, res) => {
    const {username, first_name, last_name, birthdate, password, email} = req.body;
    const sql = connectDB();
    let query ={
        text: "INSERT into users (username, first_name, last_name, birthdate, password, email) values ($1, $2, $3, $4, $5, $6)",
        values: [username, first_name, last_name, birthdate, password, email],
    }
    console.log(query);
    const data = await sql.query(query);
    return res.json(data);
   }; 

   export const putUser = async (req, res) => {
    const {id, username, first_name, last_name, birthdate, password, email} = req.body;
    const sql = connectDB();
    let query ={
        text: "UPDATE users set username= $2 first_name= $3 last_name= $4 birthdate= $5 password= $6 email= $7 WHERE user_id = $1",
        values: [id, username, first_name, last_name, birthdate, password, email],
    }
    console.log(query);
    const data = await sql.query(query);
    return res.json(data);
   }; 

   export const deleteUser = async (req, res) => {
    const {id, username, first_name, last_name, birthdate, password, email} = req.body;
    const sql = connectDB();
    let query ={
        text: "Delete user_id = $1",
        values: [id, username, first_name, last_name, birthdate, password, email],
    }
    console.log(query);
    const data = await sql.query(query);
    return res.json(data);
   }; 