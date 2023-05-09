// 25206번
// 전공학점 계산

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const s = input[0].split(' ');

console.log(s[2].trim() ==='A+');

