//11654번
// 주어진 글자의 아스키 코드값 출력
// 아스키코드 출력 함수 charCodeAt

const input =[
    'a',    
    ]
    
const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const s = input[0];

console.log(s.charCodeAt(s.length-1));
    
    
        