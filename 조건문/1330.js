// 두 수 비교하기
//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' '); 제출용
const input = fs.readFileSync('./text.txt').toString().split(' ');


const a = Number(input[0]);
const b = Number(input[1]);


if (a > b){
    console.log(">");
}else if(a < b){
    console.log("<");
} else {
    console.log('==');
}