// 입력값 77 77 7777 , 출력 7931

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);


console.log(a+b+c);