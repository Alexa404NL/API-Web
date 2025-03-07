import { connectDB } from "../utils/sql.js";
export const getUsers = async (req, res) => {
 const sql = connectDB();
 const data = await sql.query("SELECT * FROM users");
 res.json(data);
};