// 2587번
// 대표값 2

// 가운데 값은 배열 sort 하고 가운데 값을 구해야함


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);


const sum = input.reduce((a,b) => a+b);
const ascinput = input.sort((a,b) => a-b);
const medium = Math.floor(input.length/2);

console.log(sum/5);
console.log(ascinput[medium]);



