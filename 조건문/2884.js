// 백준 2884번
// 알람시계 45분 미리 설정

//입력값
const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');


let h = Number(input[0]);
let m = Number(input[1]);

// 내가 푼 방법
// if ( m >= 45){
//     console.log(h , m-45);
// }else{
//     h === 0 ? console.log( 23, m+15) : console.log(h-1, m+15)
    
// }


// 다른 사람문제 참고
let min = m-45;

if (min <0){
    min += 60;
    h--;
    if(h === -1 ){
        h = 23;
    }
}
console.log (h, min);