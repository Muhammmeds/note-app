import mysql from 'mysql2'
import dotenv from "dotenv";


dotenv.config();


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port : process.env.DB_PORT

}).promise()


// const createTable = async () => {
//   try {
//     const query = `
//       CREATE TABLE IF NOT EXISTS notes (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         note VARCHAR(255) NOT NULL,
//         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//       )
//     `;
//     await pool.query(query);
//     console.log('Table "notes" created successfully');
//   } catch (err) {
//     console.error('Error creating table:', err);
//   }
// };

// createTable();




export default pool