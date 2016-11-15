const fs = require('fs');

const fileName = process.argv[2];
const fileStr = fs.readFileSync(fileName).toString();
const arr = fileStr.split('\n');
const numNewLines = arr.length - 1;
console.log(numNewLines);
