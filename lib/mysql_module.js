require('dotenv').config();
const mysql = require('mysql');

//SQLの環境設定
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

const sql_statment = async function sql(code, argv) {
  const data = await new Promise(
    (resolve, reject) => {
      connection.query(code, argv,
        (error, results, fields) => {
          resolve({
            error: error,
            results: results,
            fields: fields
          });
        })
      }
  );
  
  return data['results'];
}

const find_letters = async function sql(argv) {
  const data = await new Promise(
    (resolve, reject) => {
      connection.query('SELECT * FROM letters', argv,
        (error, results, fields) => {
          resolve({
            error: error,
            results: results,
            fields: fields
          });
        })
      }
  );
  
  return data['results'];
}

module.exports = {
  connection,
  sql_statment,
  find_letters
};

