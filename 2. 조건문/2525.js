// 백준 2525번
// 오븐 시계, 요리 시간 추가

//입력값
const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

//입력값[input]을 줄로 나누고 첫번째 줄[input[0]]은 다시 ' '로 분리
const time = input[0].split(' ');
const h = Number(time[0]);
const m = Number(time[1]);
const p = Number(input[1]);


let min = (m+p)%60;
let plus= Math.floor((m+p)/60);
let hour = h + plus;

if (hour >=24){
   hour = hour%24;
}
console.log (hour, min );
console.log (time);