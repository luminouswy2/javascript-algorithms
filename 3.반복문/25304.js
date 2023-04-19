// 25304번 문제 
// 영수증 계산 확인

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const x = Number(input[0]);
const n = Number(input[1]); 
let total = 0;

// n 종류의 수는 입력값이 0부터 시작이라 +1만 해줌
for(i= 2 ; i <=n+1; i++){
    
    let m =input[i].split(' ');
    
    let a = Number(m[0]);
    let b = Number(m[1]);
    
    total += a * b;

}


x == total ? console.log('Yes') : console.log('No')