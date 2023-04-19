// 25305번
// 커트라인

// 상을 받는 사람중에 가장 낮은 점수 출력
// k명이 상을 받았기에 정렬하여 상받은 마지막 사람 점수 출력

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const x = input[1].split(' ').map(Number);

x.sort((a,b)=> b-a);



console.log(x[k-1]);

