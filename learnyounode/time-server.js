const net = require('net');

const port = process.argv[2];

const server = net.createServer(function listener(socket) {
  const date = new Date();
  const day = date.getFullYear() + "-" + zeroPadding(1 + date.getMonth()) + "-" + date.getDate();
  const time = date.getHours() + ":" + zeroPadding(date.getMinutes(), 2);
  socket.write(day + " " + time+"\n");
  socket.end();
});

function zeroPadding(num, padTo) {
  var zeroes = "";
  if(!padTo) {
    padTo = 2;
  }
  for (var i = 0; i < (padTo - num.length); i++) {
    zeroes += "0";
  }
  return zeroes+num;
}

server.listen(port);
