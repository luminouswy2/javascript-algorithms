// 입력 값 1 2, 출력 3
// 자바스크립트(node.js) 알고리즘을 풀기 위해 입력 값은 fs모듈을 활용
// const fs = require( "fs" ); // => fs 모듈 불러오기


const fs = require('fs');
const file = process.platform === 'linux' ? 'dev/stdin' : './text.txt';
// input으로 입력된 값을 split()함수를 사용해서 배열로 나눔
const input = fs.readFileSync(file).toString().trim().split(' ');

// parseInt를 사용한 이유는 입력값을 그냥 더하면 문자열 두개를 그냥 합쳐서 12가 출력됨(자바스크립트 종특)
const a = parseInt(input[0]);
const b = parseInt(input[1]);



console.log(a+b)