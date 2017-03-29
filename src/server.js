const http = require('http');
const router = require('./router');

const port = process.env.PORT || 4000;
const server = http.createServer(router).listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});
