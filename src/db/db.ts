import pg from "pg";
const Pool = pg.Pool;

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect((err,result)=>{
  if (err) throw err;
console.log("database connected");
})