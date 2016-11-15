const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, function (error, data) {
  if (error) {
    console.error(error);
  } else {
    console.log(data.toString().split('\n').length-1);
  }
})
