const fs = require('fs');

const dirName = process.argv[2];
const ext = "." + process.argv[3];

fs.readdir(dirName, function (err, list) {
  if (err) {
    return console.error(err);
  } else {
    const filteredList = list.filter(n => n.endsWith(ext));
    for (file of filteredList) {
      console.log(file);
    }
  }
});
