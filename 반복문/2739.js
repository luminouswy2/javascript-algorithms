// 2739번 문제 
// 구구단

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split(' ');

const n = Number(input[0]);

for ( i =1 ; i < 10 ; i++){
    console.log( n + " * " +  i + " = " + n * i );
}