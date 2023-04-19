//2438번
//별 찍기

const fs = require('fs');

// const input = fs.readFileSync('/dev/stdin').toString().trim().split(' '); //제출용
const input = fs.readFileSync('./text.txt').toString().trim().split('\n');

const t = Number(input[0]);
let result = '';

for(i= 0; i < t ; i++){
    
    result += "*";
    console.log(result);
}
