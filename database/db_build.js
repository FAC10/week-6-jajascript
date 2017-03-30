const fs = require('fs');
const dbConnection = require('./db_connection');

const buildDB = () => {
  const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();
  dbConnection.query(sql, (err, res) => {
    if (err) {
      console.log(err, "error");
    }
    else {
      console.log("database created");
    }
  });
};

buildDB();

module.exports = buildDB;
