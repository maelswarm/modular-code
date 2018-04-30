#!/usr/bin/env node
const fs = require('fs');
const path = process.argv[2].slice(0, process.argv[2].lastIndexOf('/'));

let parseFile = (filename, root) => {
  let newContent = '';
  let data = fs.readFileSync(filename, 'utf8');
  while(data.indexOf('{%') !== -1) {
    newContent += data.slice(0, data.indexOf('{%'));
    data = data.slice(data.indexOf('{%'));
    let chunk = parseFile(path + '/' + data.slice(2, data.indexOf('%}')), 0);
    newContent += chunk.replace(/(\r\n)+/g, '\r\n')
    data = data.slice(data.indexOf('%}') + 2);
  }
  newContent += data;
  if(root) {
    fs.writeFile(process.argv[3], newContent, (err) => {
      if (err) throw err;
      console.log("The file was saved!");
    });
  } else {
    return newContent;
  }
}
parseFile(process.argv[2], 1);
