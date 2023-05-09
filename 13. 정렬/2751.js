// 2751번
// 수 정렬하기

// 오름차순으로 정렬 하여 join함수를 이용하여 한 줄씩 출력



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

input.shift();

const asc = input.sort((a,b) => a-b);

console.log(asc.join('\n'));





