const dbconnection = require('../database/db_connection.js');

function setData(res, cb) {
  const dataObj = res.split('&').reduce((acc, item) => {
    const keyValue = item.split('=');
    if (keyValue[1]) {
      acc[keyValue[0]]=keyValue[1];
    }
    return acc;
  }, {});

dbconnection.query(`INSERT INTO companies (company_name, reason, location, author_id) VALUES ('${dataObj.company}', '${dataObj.reason}', 'not known', 4)`,
  (err,res) => {
    if (err) cb(err);
    else cb (null, res);
  })
}

module.exports = setData;
