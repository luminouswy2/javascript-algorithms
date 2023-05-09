// 1269번
// 대칭 차집합

// set 함수를 이용해서 차집합을 구하고 두개의 차집합의 수를 구하는 프로그램 작성


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

// n  가지고 있는 카드의 수
const [n,m] = input[0].split(' ').map(Number);

const a = new Set(input[1].split(' ').map(Number));
const b = new Set(input[2].split(' ').map(Number));

// 다른 사람의 코드참고 한방에 가능 ㄷㄷ
const res = [...a, ...b].filter((n)=> !(a.has(n) && b.has(n)));

console.log(res);

// // 차집합 구하는 함수
// function diffSet(a,b){
//     let difference = new Set(a)
//     b.forEach(e =>{
//         difference.delete(e)
//     })
//     return difference
// }
// const adiff = diffSet(a,b);
// const bdiff = diffSet(b,a);

// console.log(adiff.size + bdiff.size);