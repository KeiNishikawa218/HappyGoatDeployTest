require('dotenv').config();
const mysql = require('mysql');

// SQLの環境設定
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// 全てのデータを取得
const findAll = async function sql(argv) {
  const data = await new Promise(
    (resolve, reject) => {
      connection.query('SELECT * FROM letters', argv,　(error, results,　argv) => {
          resolve({
            error: error,
            results: results,
            argv: argv
          });
        })
      }
  );

  return data['results'];
}

// 特定のデータ1件を取得
const findById = async function sql(argv) {
  const data = await new Promise(
    (resolve, reject) => {
      connection.query('select * from letters where id = ?', argv,　(error, results) => {
          resolve({
            error: error,
            results: results,
          });
        })
      }
  );

  return data['results'];
}

// データ1件を投稿
const createLetter = async function sql(argv) {
  const data = await new Promise(
    (resolve, reject) => {
      connection.query('insert into letters set ?', argv,　(error, results) => {
          resolve({
            error: error,
            results: results,
          });
        })
      }
  );
}

module.exports = {
  findAll,
  findById,
  createLetter
};

