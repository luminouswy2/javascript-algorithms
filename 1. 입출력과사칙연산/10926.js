const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim();

// console.log(`${input}??!`);
console.log(input+"??!");

