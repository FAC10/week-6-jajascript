const fs = require('fs');
const path = require('path');

const handler = module.exports = {};

handler.serveHome = (req, res) => {
  readPublic(res, '/index.html');
};

const readPublic = (res, endpoint) => {
  fs.readFile(path.join(__dirname, '..', 'public', endpoint), (err, file) => {
    if (err) {
      console.log(err);
      handler.serveError(null, res);
    }
    else {
      var extension = endpoint.split('.')[1];
      var extensionType = {
        "html": "text/html",
        "css": "text/css",
        "js": "application/javascript",
        "jpg": "image/jpg",
        "ico": "image/x-icon"
      }
      res.writeHead(200, {'Content-type': extensionType[extension]});
      res.end(file);
    }
  })
}

handler.serveError = (req, res) => {
  res.writeHead(404, {'Content-type': 'text/html'});
  res.write('<h1>404: Page requested cannot be found!</h1>');
  res.end();
};
