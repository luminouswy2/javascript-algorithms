//27866번
//문자열
//charAt 함수를 활용하여 지정된 위치에 존재하는 문자를 찾아서 반환
//사용방법 : "[문자열]".charAt(문자위치)


// const input =[
// 'Sprout',
// '3'
// ]

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0].toString();
const n = parseInt(input[1]);

console.log(s.charAt(n-1));


