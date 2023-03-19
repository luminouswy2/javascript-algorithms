// 백준 14681번
// 사분면 고르기

//입력값
const fs = require('fs');
// 이문제에서 readFileSync('/dev/stdin')을 readFileSync(0)으로 해야 런타임 오류 안남
// const input = fs.readFileSync('/dev/stdin').toString().split('\n'); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');


const x = Number(input[0]);
const y = Number(input[1]);


if (x >= 0 && y >= 0 ){
    console.log('1');
}else if(x < 0 && y >= 0 ) {
    console.log('2');
}else if(x < 0 && y < 0 ) {
    console.log('3');
} else if(x >= 0 && y < 0 ) {
    console.log('4');
}  
