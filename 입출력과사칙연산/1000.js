const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' '); 제출용
const input = fs.readFileSync('./text.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a+b)