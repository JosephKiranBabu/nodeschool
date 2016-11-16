const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const file = process.argv[3];

const server = http.createServer(function (request, response) {
  const src = fs.createReadStream(file);
  src.pipe(response);
});

server.listen(port);
