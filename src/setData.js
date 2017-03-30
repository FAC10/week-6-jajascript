const dbconnection = require(../database/db_connection.js);

function setData(res, cb) {
  const dataObj = res.split('&').reduce((acc, item) => {
    const keyValue = item.split('=');
    if (keyValue[1]) {
      acc[keyValue[0]]=keyValue[1];
    }
    return acc;
  }, {});

dbconnection.query(`INSERT INTO companies (company_name, location, reason) VALUES ('${dataObj.company_name}', '${dataObj.location}', '${dataObj.reason}')`,
  (er,res) => {
    if (err) cb(err);
    else cb (null, res);
  })
}

module.exports = setData;
