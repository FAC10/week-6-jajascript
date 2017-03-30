const handler = require('./handler');
const sqlQueries = require('./dynamic');

module.exports = (req, res) => {

  var endpoint = req.url;
  var extension = endpoint.split('.')[1];
  console.log(endpoint);
  if (endpoint === '/') {
    handler.serveHome(req, res);
  }
  else if (extension === 'css' ||
           extension === 'js' ||
           extension === 'html' ||
           extension === 'ico' ||
           extension === 'png') {
    handler.servePublic(req, res);
  }
  else if (endpoint === "/companies") {
    sqlQueries.getData((err, response) => {
      if (err) throw err;
      let elephantSQLData = JSON.stringify(response);
      res.writeHead(200, {"Content-Type": "application/json"});
      res.end(elephantSQLData);
    });
  }
  else {
    handler.serveError(req, res);
  }
}
