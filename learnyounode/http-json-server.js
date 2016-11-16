const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer(function (request, response) {
    const parsed = url.parse(request.url);
    const isoDate = parsed.query.split('=')[1];
    const localDate = new Date(isoDate);
    if(parsed.pathname == '/api/parsetime') {
      response.end(JSON.stringify({
        "hour": localDate.getHours(),
        "minute": localDate.getMinutes(),
        "second": localDate.getSeconds()
      }));
    } else {
      response.end(JSON.stringify({
        "unixtime": localDate.getTime()
      }));
    }
});

server.listen(port);
