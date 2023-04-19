// 27323번
// 직사각형

// 정수 A,B가 주어진다. 세로 길이가 Acm, 가로길이가 Bcm인 직사각형의 넓이를 cm2 단위로 구하시오


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const a = input[0];
const b = input[1];

console.log(a * b);
