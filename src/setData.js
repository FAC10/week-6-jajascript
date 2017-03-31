const dbconnection = require('../database/db_connection.js');

function setData(body, cb) {
  const dataObj = body.split('&').reduce((acc, item) => {
    const keyValue = item.split('=');
    if (keyValue[1]) {
      acc[keyValue[0]]=keyValue[1];
    }
    return acc;
  }, {});

dbconnection.query(`INSERT INTO companies (company_name, reason, location, author_id) 
                    VALUES ('${dataObj.company}', '${dataObj.reason}', 'not known', 
                    (SELECT authors.id FROM authors WHERE authors.first_name = '${dataObj.name}'))`,
  (err,res) => {
    if (err) cb(err);
    else cb (null, res);
  })
}

module.exports = setData;
