const handler = require('./handler');

module.exports = (req, res) => {

  var endpoint = req.url;

  if (endpoint === '/') {
    handler.serveHome(req, res);
  }
  else if (endpoint.indexOf('.html') === -1) {
    handler.servePublic(req, res);
  }
  else {
    handler.serveError(req, res);
  }
}
