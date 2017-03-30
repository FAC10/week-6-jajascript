const handler = require('./handler');
const sqlQueries = require('./dynamic');

module.exports = (req, res) => {

  var endpoint = req.url;
  console.log(req);
  console.log(endpoint);
  if (endpoint === '/') {
    handler.serveHome(req, res);
  }
  else if (endpoint === "/companies") {
    sqlQueries.getData((err, res) => {
      if (err) throw err;
      let elephantSQLData = JSON.stringify(res);
      res.writeHead(200, {"content-type": "application/json"});
      res.end(elephantSQLData);
    })
  }
  else if (endpoint.indexOf('.html') === -1) {
    handler.servePublic(req, res);
  }
  else {
    handler.serveError(req, res);
  }
}
