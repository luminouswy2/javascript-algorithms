// 10757번 
// 큰수 A+B
// 큰 숫자는 BigInt()를 사용해야함
// 그리고 toString()을 사용하여 n 제거


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const a = BigInt(input[0]);
const b = BigInt(input[1]);

let answer = a + b;


console.log(answer.toString());
