const fileFilterModule = require('./file-filter-by-ext-module');

const dirName = process.argv[2];
const ext = process.argv[3];

fileFilterModule(dirName, ext, function (err, list) {
  if (err) {
    return console.error(err);
  } else {
    list.forEach(function (file) {
      console.log(file);
    });
  }
});
