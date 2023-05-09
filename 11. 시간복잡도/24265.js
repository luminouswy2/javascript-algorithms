// 24264번
// 알고리즘 수업 - 알고리즘의 수행 시간4
// n = 7 이라고 가정하면
// 첫 번째 for 문은 1 부터 6까지
// 두 번째 for 문은 i+1 부터 n 까지 6번
// 1+1 ~ 7까지  6 번
// 2+1 ~ 7까지  5번
// 3+1 ~ 7까지  4번
// 4+1 ~ 7까지  3번
// 5+1 ~ 7까지  2번
// 6+1 ~ 7까지  1번
// 1 ~부터 6까지 더하면 가우스 덧셈 으로 하면


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const n =input[0];

console.log(n*(n-1)/2);
console.log(2);


