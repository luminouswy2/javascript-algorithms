// 백준 9498번
// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

//입력값 
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' '); 제출용
const input = fs.readFileSync('./text.txt').toString().split(' ');


const a = Number(input[0]);



if (a > 89){
    console.log('A');
}else if(a > 79){
    console.log('B');
} else if(a > 69) {
    console.log('C');
} else if(a > 59) {
    console.log('D');
}else{
    console.log('F');
}