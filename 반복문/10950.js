// 10950
// A+B-3 ,반복문 문제 두 정수 A와B를 입력받은 다음 A+B를 출력

const fs = require('fs');

// 입력 값이 두줄로 되어 있고 첫번째 줄은 반복 수
// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const n = Number(input[0]);

for (i=1 ; i <= n ; i ++){
    let num = input[i].split(' ');
    a = Number(num[0]);
    b = Number(num[1]);
    console.log( a + b);
}