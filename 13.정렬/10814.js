// 10814번
// 나이순 정렬

// 1. 나이가 증가하는 순으로
// 2. 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬
// 3. 가입한 순서는 입력된 순서

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

input.shift();

input.sort((a,b) => a.split(' ')[0] - b.split(' ')[0]);


console.log(input.join('\n'));









