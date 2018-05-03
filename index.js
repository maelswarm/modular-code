#!/usr/bin/env node
const fs = require('fs');

let mcodefile = fs.readFileSync('mcodefile.json', 'utf8');
JSON.parse(mcodefile).files.forEach((file) => {
  parseFile(file, 1);
});

let parseFile = (filename, root) => {
  let newContent = '';
  let data = fs.readFileSync(filename, 'utf8');
  while(data.indexOf('{%') !== -1) {
    newContent += data.slice(0, data.indexOf('{%'));
    data = data.slice(data.indexOf('{%'));
    newContent += parseFile(path + '/' + data.slice(2, data.indexOf('%}')), 0);
    data = data.slice(data.indexOf('%}') + 2);
  }
  newContent += data;
  if(root) {
    fs.writeFile(process.argv[3], newContent, (err) => {
      if (err) throw err;
      console.log(process.argv[3] + ' was constructed.');
    });
  } else {
    return newContent;
  }
}
