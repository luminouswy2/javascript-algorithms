// 백준 2480번
// 주사위 3개 비교, 상금 출력

//입력값
const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

let result = 0;

const max = parseInt(Math.max.apply(null, input));

if ( a == b && b == c ){
   result = 10000 + max * 1000
}else if ( a == b || b==c || a ==c ){
    // max 변수를 활용할 경우 같은 값보다 나머지 값이 더 클수 가 있어서 같은 값일 경우만 찾기
   if( a == b){
    result = 1000 + a * 100
   }else if ( b==c ){
    result = 1000 + b * 100
   }else{
    result = 1000 + c * 100
   }
}else{
   result = max * 100 
}

console.log (result);