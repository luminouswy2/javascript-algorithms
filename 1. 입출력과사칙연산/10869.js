const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
//아래 나누기만 출력이 나머지를 빼고 정수만 출력해야해서 parseInt() 사용
console.log(parseInt(a/b));
console.log(a%b);