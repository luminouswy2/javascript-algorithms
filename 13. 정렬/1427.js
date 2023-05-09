// 1427번
// 소트인사이드

// 배열을 내림차순으로 정렬



const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('').map(Number);

input.sort((a,b) => b-a);
console.log(input.join(''));

// const asc = input.sort((a,b) => a-b);

// console.log(asc.join('\n'));





