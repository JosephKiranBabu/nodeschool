module.exports = fileFilter;

const fs = require('fs');

function fileFilter(dirName, ext, callback) {
  fs.readdir(dirName, function (err, list) {
      if (err) {
        callback(err);
      } else {
        const extension = "." + ext;
        const filteredList = list.filter(n => n.endsWith(extension));
        callback(null, filteredList);
      }
  });
}
