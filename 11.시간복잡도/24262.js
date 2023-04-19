// 24262번
// 알고리즘 수업 - 알고리즘의 수행 시간1
// 주어진 MenOfPassion 알고리즘은 단순히 인자로 배열A와 n을 받고 
// 특정 원소를 반환하는 함수
// index에 접근하는 것은 O(1)이므로 상수시간이 소요
// 어떤 n 이 들어와도 항상 상수시간이 소요되므로 1과 0을출력

const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);


console.log(1);
console.log(0);