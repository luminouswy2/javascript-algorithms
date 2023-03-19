//5597번
//과제 안 내신 분

//두 배열에서 차집합 구하면됨 filter함수활용 

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = 30;
const m = input.map(Number);

let arr = new Array(n).fill().map((v,i) => i+1);

let arr2 = arr.filter(x => !m.includes(x));

console.log(arr2.join(" "));