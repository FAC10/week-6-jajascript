const dbConnection = require('../database/db_connection.js');

data = {};

data.getData = (callback) => {
  dbConnection.query(`SELECT first_name, company_name, reason
    FROM companies
    INNER JOIN authors
    ON (companies.author_id = authors.id);`,
   (err,res) => {
     if (err) {
       callback(err);
     }
     callback(null, res.rows);
   });
};

module.exports = data;
