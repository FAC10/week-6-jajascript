const handler = require('./handler');

module.exports = (req, res) => {

  var endpoint = req.url;
  var extension = endpoint.split('.')[1];
  if (endpoint === '/') {
    handler.serveHome(req, res);
  }
  else if (extension === 'css' ||
           extension === 'js' ||
           extension === 'html' ||
           extension === 'ico' ||
           extension === 'png' ||
           extension === 'jpg') {
    handler.servePublic(req, res);
  }
  else if (endpoint === "/companies") {
    handler.sqlQueries(req, res);
  }
  else if (endpoint === '/create-company')  {
    handler.setData(req, res);
  }

  else {
    handler.serveError(req, res);
  }
}
