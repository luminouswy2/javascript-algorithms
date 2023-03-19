// 입력 값 1 2, 출력 3
// 자바스크립트(node.js) 알고리즘을 풀기 위해 입력 값은 fs모듈을 활용
// const fs = require( "fs" ); // => fs 모듈 불러오기

const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' '); 제출용
const input = fs.readFileSync('./text.txt').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a+b)