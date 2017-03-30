const fs = require('fs');
const path = require('path');
const setData = require('./setData.js');
const sqlQueries = require('./dynamic');

const handler = module.exports = {};

handler.serveHome = (req, res) => {
  readPublic(res, '/index.html');
};

handler.servePublic = (req, res) => {
  var endpoint = req.url;
  readPublic(res, endpoint);
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
      res.writeHead(200, {'Content-Type': extensionType[extension]});
      res.end(file);
    }
  })
}

handler.setData = (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
    body += chunk;
  })
  req.on('end', () => {
    setData(body, (err, response) => {
      if (err) console.log(err);
      res.writeHead(301, {'Location':'/'});
      res.end();
    })
  })
}

handler.sqlQueries = (req,res) => {
  sqlQueries.getData((err, response) => {
    if (err) throw err;
    let elephantSQLData = JSON.stringify(response);
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(elephantSQLData);
  });
}

handler.serveError = (req, res) => {
  res.writeHead(404, {'Content-Type': 'text/html'});
  res.write('<h1>404: Page requested cannot be found!</h1>');
  res.end();
};
