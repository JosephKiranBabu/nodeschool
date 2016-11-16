const http = require('http');

const url = process.argv[2];

http.get(url, function (response) {
  var output = "";
  response.setEncoding('utf-8');
  response.on('error', console.log);
  response.on('data', function (data) {
    output += data;
  });
  response.on('end', function () {
    console.log(output.length);
    console.log(output);
  });
});
