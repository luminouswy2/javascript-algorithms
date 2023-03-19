//27866번
//문자열

// const input =[
// 'Sprout',
// '3'
// ]

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0].toString();
const n = parseInt(input[1]);

console.log(s.charAt(n-1));


