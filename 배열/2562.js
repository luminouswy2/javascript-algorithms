//2562번

const fs = require('fs');
const input = fs.readFileSync('./text.txt').toString().trim().split('\n').map(Number);

//input 숫자로 변경해야 indexOf검색됨
//Math.max사용하기위해서 ...전개연산자 사용

// let max = Math.max(...input);

// console.log(max);
// console.log(input.indexOf(max)+1);

// 반복문으로 풀경우

const n = input.length;
let max = input[0];
let maxIdx = 0;

for (i=0; i<n; i++){
    if(max < input[i]){
        max= input[i];
        maxIdx =i;
    }
}

console.log(max);
console.log(maxIdx+1);