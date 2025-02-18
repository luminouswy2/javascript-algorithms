// 24266번
// 알고리즈 수업 - 알고리즘의 수행시간 5
// 계속 틀렸다
// 이유는  JavaScript로 표현할 수 있는 Number의 범위가 -2^53+1에서 2^53-1(9,007,199,254,740,991)까지인데 문제 입력의 최대 범위는 이를 초과하는 125,000,000,000,000,000 값을 가지게 된다.
// 따라서 Number 대신 Number 범위를 넘는 숫자를 사용할 수 있게 해주는 BigInt를 사용해야한다.
// 그래서 출력시 문자열로 하기 위해서 console.log(`${}`)를 이용해서 출력

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const n = BigInt(input[0]);


console.log(`${n*n*n}`);
console.log(3);