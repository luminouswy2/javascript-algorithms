//2908번
//상수 
// 주어진 두수를 반대로 읽어서 큰수를 출력하는 문제
// 주어진수를 split('')으로 하나씩 나누고
// 배열을 뒤집는 reverse()함수를 사용하여 뒤집고
// 다시 조인으로 묶어서 두수를 비교하는 함수를 작성


const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

const a = input[0].split('').reverse().join('');
const b = input[1].split('').reverse().join('');

// if( a > b) {
//     console.log(a);
// }else if( b > a ){
//     console.log(b);
// }
// 위 함수는 아래 삼항연산자 활용 
// console.log( a > b ? a : b);

console.log(Math.max(a,b)); 
    