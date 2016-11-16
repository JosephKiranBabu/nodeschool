const map = require('through2-map');
const http = require('http');

const port = process.argv[2];

const server = http.createServer(function (request, response) {
  if(request.method == 'POST') {
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
});

server.listen(port);
