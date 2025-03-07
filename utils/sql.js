import fs from "fs";
import pg from "pg";

const config = {
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database,
  ssl: {
    rejectUnauthorized: true,
    ca: fs.readFileSync("./ca.pem").toString(),
  },
};

export const connectDB =() =>{
    const client = new pg.Client(config);
    client.connect();
    return client;
};
