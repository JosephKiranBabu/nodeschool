const http = require('http');

var arr = [];

[2, 3, 4].forEach(i =>
  http.get(process.argv[i], function (response) {
    var output = "";
    response.setEncoding('utf-8');
    response.on('error', console.log);
    response.on('data', function (data) {
      output += data;
    });
    response.on('end', function () {
      arr[i-2] = output;
      if(arr[0] && arr[1] && arr[2]) {
        arr.forEach(i => console.log(i));
      }
    });
  }));
